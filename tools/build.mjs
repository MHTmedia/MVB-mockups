#!/usr/bin/env node
// MVB mockups build: runs on Vercel at every deploy (and locally with `node tools/build.mjs`).
//
//   _exports/<slug>.html   Claude Design exports, committed straight from Claude Design
//   pages/<slug>/          optional hand-built pages, copied as-is
//   mockups.json           optional overrides: { "<slug>": { "title": "...", "desc": "...", "hidden": true } }
//
// Output (public/, never committed):
//   _shared/mvb.css        design-system CSS from the most recently updated export (for hand-built pages)
//   _shared/mvb.<hash>.css the exact CSS each export shipped with (exports link their own, so they never shift)
//   _shared/fonts|js|img   content-hashed assets, shared and de-duplicated across every page
//   <slug>/index.html      lean page (~20 KB) + <slug>/images/
//   index.html             listing of every mockup
//
// No dependencies. Node 18+.

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public");
const EXPORTS = path.join(ROOT, "_exports");
const PAGES = path.join(ROOT, "pages");
const SITE_NAME = "MVB CRO Mockups";
// <style> sections that start with this comment header are design-system CSS
const DS_HEADER = /\/\*\s*Mad Viking Beard Co\.\s*[—\-:]/g;
const SHARED_IMG_MAX = 150_000;
const EXT = {
  "image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp", "image/gif": ".gif",
  "image/svg+xml": ".svg", "image/avif": ".avif", "font/woff2": ".woff2", "font/woff": ".woff",
  "text/javascript": ".js", "application/javascript": ".js", "text/css": ".css",
};

const hash = (buf, n = 10) => crypto.createHash("sha1").update(buf).digest("hex").slice(0, n);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const warn = (m) => console.log("WARNING: " + m);

function write(rel, data) {
  const p = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, data);
}

function gitDate(file) {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", file], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch { return ""; }
}

function decode(entry) {
  let raw = Buffer.from(entry.data, "base64");
  if (entry.compressed) {
    try { raw = zlib.gunzipSync(raw); } catch { raw = zlib.inflateRawSync(raw); }
  }
  return raw;
}

function jsName(raw) {
  const head = raw.subarray(0, 600).toString("utf8");
  const h = hash(raw, 8);
  if (head.includes("dc-runtime")) return `dc-runtime.${h}.js`;
  const m = head.match(/@ds-bundle:\s*\{[^}]*"namespace":"([A-Za-z]+)/);
  if (m) return m[1].replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/^mvbdesign/, "mvb-design") + `.${h}.js`;
  if (head.includes("react-dom.production")) return `react-dom.production.min.${h}.js`;
  if (head.includes("react.production")) return `react.production.min.${h}.js`;
  return `script.${h}.js`;
}

function block(src, kind) {
  const m = src.match(new RegExp(`<script type="__bundler/${kind}">([\\s\\S]*?)</script>`));
  return m ? JSON.parse(m[1]) : null;
}

const cssVersions = []; // { css, date }

function buildExport(file, slug) {
  const src = fs.readFileSync(file, "utf8");
  const manifest = block(src, "manifest");
  let tpl = block(src, "template");
  if (!manifest || tpl == null) {
    warn(`${path.basename(file)} is not a Claude Design bundle; published as-is (relative assets may break).`);
    write(`${slug}/index.html`, src);
    return { title: null };
  }
  const extById = Object.fromEntries((block(src, "ext_resources") || []).map((e) => [e.uuid, e.id]));
  const paths = {}; // uuid -> path relative to the page
  const resources = {}; // window.__resources

  for (const [uuid, entry] of Object.entries(manifest)) {
    const mime = entry.mime || "";
    const raw = decode(entry);
    const ext = EXT[mime] || "";
    const extId = extById[uuid];
    let rel;
    if (mime.startsWith("font/")) rel = `_shared/fonts/${hash(raw)}${ext}`;
    else if (mime.includes("javascript")) rel = `_shared/js/${jsName(raw)}`;
    else if (mime.startsWith("image/") && extId) rel = `${slug}/images/${extId.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-|-$/g, "")}${ext}`;
    else if (mime.startsWith("image/") && raw.length <= SHARED_IMG_MAX) rel = `_shared/img/${hash(raw)}${ext}`;
    else if (mime.startsWith("image/")) rel = `${slug}/images/${hash(raw)}${ext}`;
    else rel = `${slug}/assets/${hash(raw)}${ext}`;
    write(rel, raw);
    const pageRel = rel.startsWith(slug + "/") ? rel.slice(slug.length + 1) : "../" + rel;
    paths[uuid] = pageRel;
    if (extId) resources[extId] = pageRel;
  }

  // Pull design-system CSS out of the template (deduping the combined copy Claude Design also ships)
  const sections = [];
  const seen = new Set();
  tpl = tpl.replace(/[ \t]*<style>([\s\S]*?)<\/style>\n?/g, (whole, css) => {
    if (!new RegExp(DS_HEADER.source).test(css.slice(0, 400))) return whole;
    const starts = [...css.matchAll(new RegExp(DS_HEADER.source, "g"))].map((m) => m.index);
    starts.forEach((s, i) => {
      const sec = css.slice(s, starts[i + 1] ?? css.length).trim();
      const key = sec.replace(/\s+/g, " ");
      if (!seen.has(key)) { seen.add(key); sections.push(sec); }
    });
    return "";
  });
  for (const [uuid, rel] of Object.entries(paths)) tpl = tpl.split(uuid).join(rel);

  let cssHref = null;
  if (sections.length) {
    let css = sections.join("\n\n") + "\n";
    for (const [uuid, rel] of Object.entries(paths)) css = css.split(uuid).join(rel);
    css = css.split("../_shared/").join("");
    css = "/* MVB design system : generated by tools/build.mjs from a Claude Design export. */\n\n" + css;
    const name = `mvb.${hash(Buffer.from(css))}.css`;
    write(`_shared/${name}`, css);
    cssVersions.push({ css, date: gitDate(file) || "0000" });
    cssHref = `../_shared/${name}`;
  }

  const labelMatch = tpl.match(/data-screen-label="([^"]+)"/);
  return { tpl, cssHref, resources, title: labelMatch ? labelMatch[1] : null };
}

const SMALL_WORDS = new Set(["a", "an", "and", "by", "for", "in", "of", "on", "or", "the", "to", "vs", "with"]);
const ACRONYMS = new Set(["atc", "cta", "faq", "pdp", "plp", "ugc", "ui", "ux"]);
function titleCase(slug) {
  return slug.split("-").map((w, i) =>
    ACRONYMS.has(w) ? w.toUpperCase() : i && SMALL_WORDS.has(w) ? w : w[0].toUpperCase() + w.slice(1)).join(" ");
}

// cro-017-shop-by-scent -> "CRO-017 | Shop by Scent"
function croTitle(slug) {
  const m = slug.match(/^cro-(\d+)-(.+)$/);
  return m ? `CRO-${m[1]} | ${titleCase(m[2])}` : null;
}

// 2026-09-28 -> "Sep 28, 2026"
function prettyDate(d) {
  const t = Date.parse(d + "T00:00:00Z");
  return isNaN(t) ? "" : new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

// Layout from the Claude Design export at _exports/_index-design.html
function renderIndex(list) {
  const rows = list.map((r) => {
    const m = r.title.match(/^(CRO-\d+)\s*\|\s*(.+)$/);
    const [num, name] = m ? [m[1], m[2]] : ["", r.title];
    return `      <a class="row" href="${r.slug}/">
        <span class="num">${esc(num)}</span>
        <span class="name">${esc(name)}${r.desc ? `<span class="desc">${esc(r.desc)}</span>` : ""}</span>
        <span class="date">${r.updated ? "Updated " + prettyDate(r.updated) : ""}</span>
        <span class="view">View →</span>
      </a>`;
  }).join("\n");
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(SITE_NAME)}</title>
<link rel="stylesheet" href="_shared/mvb.css">
<style>
  body { margin: 0; background: #000; color: #fff; font-family: 'Inter', sans-serif; }
  main { max-width: 960px; margin: 0 auto; padding: 75px 40px; display: flex; flex-direction: column; gap: 50px; }
  header { display: flex; flex-direction: column; gap: 12px; align-items: center; text-align: center; }
  .eyebrow { font-size: 11px; letter-spacing: .36em; text-transform: uppercase; color: #999; }
  h1 { margin: 0; font-family: 'Fjalla One', sans-serif; font-weight: 400; font-size: 40px; letter-spacing: .15em; text-transform: uppercase; }
  .list { display: flex; flex-direction: column; border-top: 1px solid #2b2a27; }
  .row { display: grid; grid-template-columns: 110px minmax(0, 1fr) auto auto; gap: 24px; align-items: center;
         padding: 24px 0; border-bottom: 1px solid #2b2a27; color: #fff; text-decoration: none; }
  .row:hover, .row:hover .view { color: #b30000; }
  .num { font-family: 'Fjalla One', sans-serif; font-size: 16px; letter-spacing: .15em; color: #b30000; }
  .name { font-family: 'Fjalla One', sans-serif; font-size: 20px; letter-spacing: .15em; text-transform: uppercase; }
  .desc { display: block; margin-top: 6px; font-family: 'Inter', sans-serif; font-size: 13px; letter-spacing: 0; text-transform: none; line-height: 1.5; color: #999; }
  .date { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: #999; }
  .view { font-size: 12px; letter-spacing: .36em; text-transform: uppercase; color: #fff; }
  @media (max-width: 720px) {
    main { padding: 56px 16px; gap: 36px; }
    h1 { font-size: 30px; }
    .row { grid-template-columns: minmax(0, 1fr) auto; gap: 8px 16px; padding: 20px 0; }
    .num, .name { grid-column: 1 / -1; }
    .name { font-size: 18px; }
  }
</style>
</head>
<body>
  <main>
    <header>
      <div class="eyebrow">Mad Viking Beard Co.</div>
      <h1>CRO Mockups</h1>
    </header>
    <div class="list">
${rows}
    </div>
  </main>
</body></html>
`;
}

// ---------------------------------------------------------------- main
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const overrides = fs.existsSync(path.join(ROOT, "mockups.json"))
  ? JSON.parse(fs.readFileSync(path.join(ROOT, "mockups.json"), "utf8")) : {};
const list = [];
const slugOk = (s) => /^[a-z0-9][a-z0-9-]*$/.test(s);

const exportsFiles = fs.existsSync(EXPORTS)
  ? fs.readdirSync(EXPORTS).filter((f) => f.toLowerCase().endsWith(".html") && !f.startsWith("_")) : [];
const built = [];
for (const f of exportsFiles) {
  const slug = f.slice(0, -5).toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
  if (!slugOk(slug)) { warn(`skipped ${f}: rename it to lowercase-with-dashes.html`); continue; }
  const file = path.join(EXPORTS, f);
  const r = buildExport(file, slug);
  built.push({ slug, file, ...r });
}
// shared mvb.css = newest export's design system (for hand-built pages and the index)
if (cssVersions.length) {
  cssVersions.sort((a, b) => a.date.localeCompare(b.date));
  write("_shared/mvb.css", cssVersions[cssVersions.length - 1].css);
}
for (const b of built) {
  const o = overrides[b.slug] || {};
  if (o.hidden) { fs.rmSync(path.join(OUT, b.slug), { recursive: true, force: true }); continue; }
  const title = o.title || croTitle(b.slug) || b.title || titleCase(b.slug);
  if (b.tpl != null) {
    const head = [
      `<title>${esc(title)} | ${esc(SITE_NAME)}</title>`,
      `<meta name="robots" content="noindex, nofollow">`,
      b.cssHref ? `<link rel="stylesheet" href="${b.cssHref}">` : "",
      `<script>window.__resources = ${JSON.stringify(b.resources).replace(/<\//g, "<\\/")};</script>`,
    ].filter(Boolean).join("\n");
    let html = b.tpl.replace(/(<meta name="viewport"[^>]*>)/, (m) => m + "\n" + head);
    if (html === b.tpl) html = b.tpl.replace(/<head>/i, "<head>\n" + head);
    html = html.replace(/\n{3,}/g, "\n\n");
    if (/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/.test(html)) warn(`${b.slug}: unresolved bundle asset id left in page`);
    write(`${b.slug}/index.html`, html);
  }
  list.push({ slug: b.slug, title, desc: o.desc || "", updated: gitDate(b.file) });
  console.log(`built  /${b.slug}/  "${title}"`);
}

// hand-built pages
if (fs.existsSync(PAGES)) {
  for (const d of fs.readdirSync(PAGES, { withFileTypes: true })) {
    if (!d.isDirectory() || !slugOk(d.name)) continue;
    if (list.some((r) => r.slug === d.name)) { warn(`pages/${d.name} clashes with an export of the same name; skipped`); continue; }
    const o = overrides[d.name] || {};
    if (o.hidden) continue;
    fs.cpSync(path.join(PAGES, d.name), path.join(OUT, d.name), { recursive: true });
    const idx = path.join(PAGES, d.name, "index.html");
    const t = fs.existsSync(idx) && fs.readFileSync(idx, "utf8").match(/<title>([^<|]+)/);
    list.push({ slug: d.name, title: o.title || croTitle(d.name) || (t && t[1].trim()) || titleCase(d.name), desc: o.desc || "", updated: gitDate(path.join(PAGES, d.name)) });
    console.log(`copied /${d.name}/ (hand-built)`);
  }
}

list.sort((a, b) => (b.updated || "").localeCompare(a.updated || "") || a.title.localeCompare(b.title));
write("index.html", renderIndex(list));
if (fs.existsSync(path.join(ROOT, "robots.txt"))) fs.copyFileSync(path.join(ROOT, "robots.txt"), path.join(OUT, "robots.txt"));
console.log(`done: ${list.length} mockup(s) -> public/`);
