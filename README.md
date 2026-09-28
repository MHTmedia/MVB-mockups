# MVB Mockups

Public design mockups for Mad Viking Beard Co., built in Claude Design by MHT Media.
Each mockup lives in its own folder and is served at `https://<vercel-domain>/<folder>/`.
The root URL lists every mockup. All pages are `noindex` (meta tag, header and robots.txt), so links work for the client but search engines stay out.

## Structure

```
_shared/            Used by every mockup. Don't hand-edit JS or font files.
  mvb.css           MVB design system: fonts, color/type/spacing tokens, .mv-btn etc.
  fonts/  js/  img/ Content-hashed files, safe to cache forever, never duplicated.
shop-by-scent/      One folder per mockup: index.html + images/
tools/add-mockup.py Turns a Claude Design export into a mockup folder.
_exports/           Drop raw Claude Design exports here. Git-ignored (they are 5-10 MB each).
mockups.json        Registry that drives the root index.html (written by the script).
```

## Add or update a mockup

1. In Claude Design, export the page as a standalone HTML file and save it to `_exports/`.
2. From the repo root run:

   ```
   python3 tools/add-mockup.py _exports/<file>.html <folder-name> --title "Page Name" --desc "One line for the index"
   ```

   Same folder name again = replaces that mockup with the new revision.
3. Commit and push. Vercel deploys automatically.

Or just tell Claude in the Mad Viking Beard project: "add `_exports/<file>.html` as `<folder-name>`".

## Notes

- The script pulls the shared design-system CSS out of each export. If a newer export ships different
  tokens, it keeps the existing `_shared/mvb.css` (so older mockups don't shift), links the page to a
  versioned copy, and warns you. Add `--update-css` to promote the new CSS to all pages.
- Folder names: lowercase, numbers, dashes (e.g. `pdp-bundle-builder`). Folders starting with `_` are reserved.
- Pages need the trailing slash (`/shop-by-scent/`); `vercel.json` adds it automatically.
- Local preview: `python3 -m http.server` in the repo root, then open http://localhost:8000/.
