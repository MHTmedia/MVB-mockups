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

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "public");
const EXPORTS = path.join(ROOT, "_exports");
const PAGES = path.join(ROOT, "pages");
const SITE_NAME = "MVB Mockups";
const SITE_SUB = "Mad Viking Beard Co. design mockups by MHT Media. Work in progress, not the live store.";
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

function titleCase(slug) {
  return slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

function renderIndex(list) {
  const cards = list.map((r) => `      <a class="card" href="${r.slug}/">
        <span class="t">${esc(r.title)}</span>
        ${r.desc ? `<span class="d">${esc(r.desc)}</span>` : ""}
        <span class="m">${r.updated ? "Updated " + r.updated : ""}</span>
      </a>`).join("\n");
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(SITE_NAME)}</title>
<link rel="stylesheet" href="_shared/mvb.css">
<style>
  body { margin: 0; background: var(--surface-page, #000); color: var(--text-primary, #fff); font-family: var(--font-body, sans-serif); }
  main { max-width: 960px; margin: 0 auto; padding: 64px 16px 96px; }
  h1 { margin: 0 0 8px; }
  .sub { margin: 0 0 40px; color: var(--text-muted, #999); font-size: 14px; letter-spacing: .03em; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr)); gap: 16px; }
  .card { display: flex; flex-direction: column; gap: 8px; padding: 22px; border: var(--border-hairline, 1px solid #2b2a27);
          background: var(--surface-raised, #171717); color: inherit; text-decoration: none; transition: border-color .15s; }
  .card:hover { border-color: var(--accent, #b30000); }
  .t { font-family: var(--font-display, sans-serif); font-size: 20px; letter-spacing: .12em; text-transform: uppercase; }
  .d { font-size: 13.5px; line-height: 1.6; color: var(--text-dim, #d4d4d4); }
  .m { margin-top: auto; font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--text-muted, #999); }
</style>
</head>
<body>
  <main>
    <h1 class="mv-display">${esc(SITE_NAME)}</h1>
    <p class="sub">${esc(SITE_SUB)}</p>
    <div class="grid">
${cards}
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
  const title = o.title || b.title || titleCase(b.slug);
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
    list.push({ slug: d.name, title: o.title || (t && t[1].trim()) || titleCase(d.name), desc: o.desc || "", updated: gitDate(path.join(PAGES, d.name)) });
    console.log(`copied /${d.name}/ (hand-built)`);
  }
}

list.sort((a, b) => (b.updated || "").localeCompare(a.updated || "") || a.title.localeCompare(b.title));
write("index.html", renderIndex(list));
if (fs.existsSync(path.join(ROOT, "robots.txt"))) fs.copyFileSync(path.join(ROOT, "robots.txt"), path.join(OUT, "robots.txt"));
console.log(`done: ${list.length} mockup(s) -> public/`);
