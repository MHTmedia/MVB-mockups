#!/usr/bin/env python3
"""
add-mockup.py : unbundle a Claude Design HTML export into the MVB-mockups repo.

Usage (run from the repo root):
    python3 tools/add-mockup.py <export.html> <slug> --title "Shop by Scent" [--desc "One line"] [--update-css]

What it does:
  1. Reads the self-unpacking bundle Claude Design produces (template + base64 asset manifest).
  2. Writes shared, reusable assets into _shared/ (content-hashed, so nothing is duplicated
     across mockups and an old mockup never breaks when a newer export ships a new runtime):
        _shared/mvb.css           MVB design-system CSS (fonts, color/type/spacing tokens, base components)
        _shared/fonts/*.woff2     webfonts referenced by mvb.css
        _shared/js/*.js           Claude Design runtime, MVB component library, React
        _shared/img/*             small brand images used directly in markup (logo, icons)
  3. Writes the page itself to <slug>/index.html plus its own images to <slug>/images/.
  4. Registers the page in mockups.json and regenerates the root index.html listing.

Re-running with the same slug replaces that page (use it to publish a new revision).
Stdlib only; no installs needed.
"""
import argparse, base64, datetime, gzip, hashlib, html, json, os, re, sys, zlib

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SHARED = "_shared"
# A <style> block whose sections start with this comment header is design-system CSS.
DS_HEADER = re.compile(r"/\*\s*Mad Viking Beard Co\.\s*[—\-:]")
EXT = {
    "image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp", "image/gif": ".gif",
    "image/svg+xml": ".svg", "image/avif": ".avif", "font/woff2": ".woff2", "font/woff": ".woff",
    "text/javascript": ".js", "application/javascript": ".js", "text/css": ".css",
}
SHARED_IMG_MAX = 150_000  # directly referenced images under this size are treated as shared brand assets


def die(msg):
    sys.exit("ERROR: " + msg)


def read_bundle(path):
    src = open(path, encoding="utf-8").read()

    def block(kind, required=True):
        m = re.search(r'<script type="__bundler/%s">(.*?)</script>' % kind, src, re.S)
        if not m:
            if required:
                die("%s is not a Claude Design bundle (no __bundler/%s block)." % (path, kind))
            return None
        return json.loads(m.group(1))

    return block("manifest"), block("template"), block("ext_resources", False) or []


def decode(entry):
    raw = base64.b64decode(entry["data"])
    if entry.get("compressed"):
        try:
            raw = gzip.decompress(raw)
        except OSError:
            raw = zlib.decompress(raw, -15)
    return raw


def short_hash(b, n=10):
    return hashlib.sha1(b).hexdigest()[:n]


def write(rel, data):
    p = os.path.join(REPO, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    if isinstance(data, str):
        data = data.encode("utf-8")
    if os.path.exists(p) and open(p, "rb").read() == data:
        return False
    open(p, "wb").write(data)
    return True


def js_name(text, raw):
    """Readable, versioned name for known scripts."""
    h = short_hash(raw, 8)
    head = text[:600]
    if "dc-runtime" in head:
        return "dc-runtime.%s.js" % h
    m = re.search(r'@ds-bundle:\s*\{[^}]*"namespace":"([A-Za-z]+)', head)
    if m:
        ns = re.sub(r"(?<!^)(?=[A-Z])", "-", m.group(1)).lower()  # MVBDesignSystem -> m-v-b-design-system
        ns = ns.replace("m-v-b-", "mvb-")
        return "%s.%s.js" % (ns, h)
    if "react-dom.production" in head:
        return "react-dom.production.min.%s.js" % h
    if "react.production" in head:
        return "react.production.min.%s.js" % h
    return "script.%s.js" % h


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("bundle", help="Claude Design HTML export (the single self-unpacking .html file)")
    ap.add_argument("slug", help="URL folder name, e.g. shop-by-scent")
    ap.add_argument("--title", required=True, help='Mockup name, e.g. "Shop by Scent" (tab shows "<title> | MVB Mockups")')
    ap.add_argument("--desc", default="", help="One-line description for the root index")
    ap.add_argument("--update-css", action="store_true",
                    help="Overwrite _shared/mvb.css if this export's design-system CSS differs")
    a = ap.parse_args()

    slug = a.slug.strip("/").lower()
    if not re.fullmatch(r"[a-z0-9][a-z0-9-]*", slug) or slug.startswith("_") or slug == "tools":
        die("slug must be lowercase letters, numbers and dashes (e.g. shop-by-scent).")

    manifest, tpl, ext_res = read_bundle(a.bundle)
    ext_by_uuid = {e["uuid"]: e["id"] for e in ext_res}
    page_dir = slug
    up = "../"  # page -> repo root (pages live one level deep, served with trailing slash)

    paths = {}          # uuid -> path relative to the page
    resources = {}      # window.__resources map (ids the runtime / page code looks up)
    changed = []

    for uuid, entry in manifest.items():
        mime = entry.get("mime", "")
        raw = decode(entry)
        ext = EXT.get(mime, "")
        ext_id = ext_by_uuid.get(uuid)
        if mime.startswith("font/"):
            rel = "%s/fonts/%s%s" % (SHARED, short_hash(raw), ext)
        elif "javascript" in mime:
            rel = "%s/js/%s" % (SHARED, js_name(raw.decode("utf-8", "replace"), raw))
        elif mime.startswith("image/") and ext_id:
            safe = re.sub(r"[^a-zA-Z0-9._-]+", "-", ext_id).strip("-")
            rel = "%s/images/%s%s" % (page_dir, safe, ext)
        elif mime.startswith("image/") and len(raw) <= SHARED_IMG_MAX:
            rel = "%s/img/%s%s" % (SHARED, short_hash(raw), ext)
        elif mime.startswith("image/"):
            rel = "%s/images/%s%s" % (page_dir, short_hash(raw), ext)
        else:
            rel = "%s/assets/%s%s" % (page_dir, short_hash(raw), ext)
        if write(rel, raw):
            changed.append(rel)
        page_rel = rel[len(page_dir) + 1:] if rel.startswith(page_dir + "/") else up + rel
        paths[uuid] = page_rel
        if ext_id:
            resources[ext_id] = page_rel

    # ---- split design-system CSS out of the template ----
    ds_sections, seen = [], set()

    def take_style(m):
        css = m.group(1)
        if not DS_HEADER.search(css[:400]):
            return m.group(0)  # page-specific style: keep inline
        starts = [x.start() for x in DS_HEADER.finditer(css)]
        for i, s in enumerate(starts):
            sec = css[s: starts[i + 1] if i + 1 < len(starts) else len(css)].strip()
            key = re.sub(r"\s+", " ", sec)
            if key not in seen:
                seen.add(key)
                ds_sections.append(sec)
        return ""

    body = re.sub(r"[ \t]*<style>(.*?)</style>\n?", take_style, tpl, flags=re.S)

    for uuid, rel in paths.items():
        body = body.replace(uuid, rel)

    if ds_sections:
        css = "\n\n".join(ds_sections) + "\n"
        for uuid, rel in paths.items():
            css = css.replace(uuid, rel)
        # fonts inside the shared CSS are referenced relative to _shared/
        css = css.replace(up + SHARED + "/", "")
        urls = [u.strip("\"' ") for u in re.findall(r"url\(([^)]*)\)", css)]
        if any(not re.match(r"(fonts/|img/|data:|https?:)", u) for u in urls):
            print("WARNING: mvb.css contains a url() outside _shared/; check it renders.")
        header = ("/* MVB design system : shared by every mockup in this repo.\n"
                  "   Generated by tools/add-mockup.py from a Claude Design export. */\n\n")
        css = header + css
        css_path = os.path.join(REPO, SHARED, "mvb.css")
        if os.path.exists(css_path) and open(css_path, encoding="utf-8").read() != css and not a.update_css:
            alt = "%s/mvb.%s.css" % (SHARED, short_hash(css.encode()))
            write(alt, css)
            print("WARNING: this export's design-system CSS differs from _shared/mvb.css.\n"
                  "         Kept the existing file; this page links %s instead.\n"
                  "         Re-run with --update-css to make it the shared version for all pages." % alt)
            css_href = up + alt
        else:
            if write(SHARED + "/mvb.css", css):
                changed.append(SHARED + "/mvb.css")
            css_href = up + SHARED + "/mvb.css"
    else:
        css_href = None

    # ---- head: title, noindex, shared css, resource map (before any runtime script) ----
    head_bits = [
        "<title>%s | MVB Mockups</title>" % html.escape(a.title),
        '<meta name="robots" content="noindex, nofollow">',
    ]
    if css_href:
        head_bits.append('<link rel="stylesheet" href="%s">' % css_href)
    head_bits.append("<script>window.__resources = %s;</script>" %
                     json.dumps(resources, indent=None).replace("</", "<\\/"))
    body = re.sub(r"(<meta name=\"viewport\"[^>]*>)", lambda m: m.group(1) + "\n" + "\n".join(head_bits),
                  body, count=1)
    body = re.sub(r"\n{3,}", "\n\n", body)
    if write(page_dir + "/index.html", body):
        changed.append(page_dir + "/index.html")

    # ---- registry + root index ----
    reg_path = os.path.join(REPO, "mockups.json")
    reg = json.load(open(reg_path)) if os.path.exists(reg_path) else []
    today = datetime.date.today().isoformat()
    old = next((r for r in reg if r["slug"] == slug), None)
    entry = {"slug": slug, "title": a.title, "desc": a.desc or (old or {}).get("desc", ""),
             "created": (old or {}).get("created", today), "updated": today}
    reg = [r for r in reg if r["slug"] != slug] + [entry]
    reg.sort(key=lambda r: r["updated"], reverse=True)
    write("mockups.json", json.dumps(reg, indent=2) + "\n")
    write("index.html", render_index(reg))

    size = sum(os.path.getsize(os.path.join(REPO, page_dir, f))
               for f in ["index.html"])
    print("Done: %s/  (page HTML %.1f KB, bundle was %.1f MB)" %
          (slug, size / 1024, os.path.getsize(a.bundle) / 1048576))
    print("Changed files:\n  " + "\n  ".join(changed or ["(none, identical to what is committed)"]))


def render_index(reg):
    cards = "\n".join(
        '      <a class="card" href="%s/">\n        <span class="t">%s</span>\n'
        '        <span class="d">%s</span>\n        <span class="m">Updated %s</span>\n      </a>'
        % (r["slug"], html.escape(r["title"]), html.escape(r["desc"]), r["updated"]) for r in reg)
    return """<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>MVB Mockups</title>
<link rel="stylesheet" href="_shared/mvb.css">
<style>
  body { margin: 0; background: var(--surface-page); color: var(--text-primary); font-family: var(--font-body); }
  main { max-width: 960px; margin: 0 auto; padding: 64px 16px 96px; }
  h1 { margin: 0 0 8px; }
  .sub { margin: 0 0 40px; color: var(--text-muted); font-size: 14px; letter-spacing: .03em; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%%, 280px), 1fr)); gap: 16px; }
  .card { display: flex; flex-direction: column; gap: 8px; padding: 22px; border: var(--border-hairline);
          background: var(--surface-raised); color: inherit; text-decoration: none; transition: border-color var(--dur-fast); }
  .card:hover { border-color: var(--accent); }
  .t { font-family: var(--font-display); font-size: 20px; letter-spacing: .12em; text-transform: uppercase; }
  .d { font-size: 13.5px; line-height: 1.6; color: var(--text-dim); }
  .m { margin-top: auto; font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--text-muted); }
</style>
</head>
<body>
  <main>
    <h1 class="mv-display">MVB Mockups</h1>
    <p class="sub">Mad Viking Beard Co. design mockups by MHT Media. Work in progress, not the live store.</p>
    <div class="grid">
%s
    </div>
  </main>
</body></html>
""" % cards


if __name__ == "__main__":
    main()
