# Quiet Machine — AI Field Guide

A plain-language field guide to how AI systems actually work — written by
[Quiet Machine Studio](https://qm.studio). No hype, no jargon. Read it live at
**[qm.studio/field-guide](https://qm.studio/field-guide/)**.

This repo is the whole thing: the markdown source *and* the small static-site engine
that builds it. One markdown source of truth → the live guide, a downloadable bundle,
and an `llms.txt` for AI search.

## How it fits together

```
content/field-guide/          source of truth — topics are folders, articles are files
  _guide.md                   guide title + intro
  <topic>/
    _topic.md                 topic name, order, blurb
    NN-<slug>.md              an article. NN = lesson order (the learning path)
build/build.mjs               the generator (marked + gray-matter)
dist/                         generated static site
```

### An article is just markdown + frontmatter
```yaml
---
title: "AI, without the hype"
level: beginner            # beginner | intermediate | advanced  (the reader toggle)
order: 1                   # position in the topic's learning path
status: published          # published | planned
koan: "A model, a harness, a loop, and a prompt."
summary: "One line for the feed and social cards."
date: 2026-06-11
updated: 2026-06-11        # bump on every edit — the guide stays current
faq:
  - q: "A real question a reader would ask."
    a: "Answered in one to three sentences."
---
## body markdown...
```

### What the build produces
- `field-guide/index.html` — the library: folder-tree nav + a 3-level reader toggle
  (beginner / intermediate / advanced, cumulative + sticky), color-keyed level badges.
- One HTML page per published article — FAQ + `FAQPage`/`Article` JSON-LD, studio byline
  with date + "last updated", breadcrumb + prev/next, and a browsable file tree.
- A downloadable **bundle** — the `content/field-guide/` markdown tree itself, readable in
  any editor / Obsidian / GitHub.
- `llms.txt` + a concatenated full-text guide, for AI-search citability.

## Build it yourself
```sh
npm install
npm run build      # → dist/
```

## Voice
Every article follows one register — spare, declarative, answer-first. It's written down
in [`VOICE.md`](./VOICE.md); read it before contributing prose.

## License
- **Code** (the build engine): MIT — see [`LICENSE`](./LICENSE).
- **Content** (everything under `content/`): CC BY-NC 4.0 — free to share and adapt with
  attribution to Quiet Machine Studio, non-commercial.

---

If the guide taught you something, a ⭐ helps other people find it.
Authored by **Quiet Machine Studio**. The work is the credibility.
