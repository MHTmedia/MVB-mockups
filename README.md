# MVB Mockups

Public design mockups for Mad Viking Beard Co., built in Claude Design by MHT Media.
Live at https://mvb-mockups.vercel.app/ (the root lists every mockup). Everything is `noindex`:
anyone with a link can view it, but search engines stay out.

## Add or update a mockup

In Claude Design, commit the page to this repo at:

```
_exports/<slug>.html        e.g. _exports/pdp-bundle-builder.html
```

That's it. Vercel deploys on every commit and runs `tools/build.mjs`, which turns the export into a lean page at
`https://mvb-mockups.vercel.app/<slug>/` and adds it to the index. Committing to the same path again publishes a new
revision. Git keeps every old version.

- Slug = file name: lowercase letters, numbers, dashes. Files starting with `_` are ignored (use for drafts).
- The index title comes from the Claude Design screen name. Override it, add a description, or hide a page in
  `mockups.json`:

  ```json
  { "pdp-bundle-builder": { "title": "PDP Bundle Builder", "desc": "One line for the index", "hidden": false } }
  ```

## What the build does

```
_exports/*.html   ->  public/<slug>/index.html + images/   (~20 KB page instead of ~6 MB)
                      public/_shared/fonts|js|img/          content-hashed, shared by all pages
                      public/_shared/mvb.<hash>.css         exact design-system CSS each export shipped with
                      public/_shared/mvb.css                latest design-system CSS (for hand-built pages)
                      public/index.html                     the listing
pages/<slug>/     ->  copied as-is (optional hand-built pages; link ../_shared/mvb.css)
```

`public/` is generated at deploy time and never committed. Local preview: `node tools/build.mjs`, then
`npx serve public` or `python3 -m http.server -d public`.
