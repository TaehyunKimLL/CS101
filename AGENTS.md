# AGENTS.md

## Project purpose
- Introductory computer programming course materials for first-year university students.
- Content is primarily in Korean and stored as Markdown worksheets and Marp slide decks.

## Target audience
- First-year university students with little to no programming background.

## Lecture duration
- Standard chapter slide deck targets ~90 minutes (including short breaks and hands-on demos).

## Composition principles
- Start from concrete goals and visible outcomes, then expand to concepts.
- Keep one key idea per slide; prefer short bullets and live demos.
- Provide clear checkpoints: "what to know" and "what to do next".

## Content structure
- Each chapter should have:
  - Slide deck (Marp)
  - Matching worksheet with practice tasks and checkpoints

## Marp baseline (slides/worksheets)
- Start every Marp Markdown file with this front matter:

```md
---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---
```

## File naming conventions
- C slides: `C-Chap##_<slug>_slide.md`
- Python slides: `Python-Chap##_<slug>_slide.md`
- Worksheets: `<Lang>-Chap##_<slug>_worksheet.md`
  - Example: `C-Chap03_Operators_expressions_worksheet.md`

## TOC / TODO
- `TABLE_OF_CONTENTS.md` lists all published materials.
- `todo.md` tracks planned chapters and their slide/worksheet mapping.

## Repository layout (top level)
- `*.md`: Source materials (worksheets and Marp slides).
- `dist/`: Build output (generated PDFs).
- `package.json`, `package-lock.json`: Marp CLI dependency and build script.
- `node_modules/`: NPM dependencies (do not edit).

## Build / export
- Install deps: `npm install`
- Export all Markdown files to PDF (Marp): `npm run build:slides`
  - Outputs PDFs to `dist/`
  - Uses `--allow-local-files` for local assets

## Authoring notes
- Many files include a Marp front matter block (`marp: true`).
- Keep slide and worksheet content in Markdown; avoid touching `dist/` and `node_modules/`.
- Use UTF-8 for Korean text.

## Editing guidelines for agents
- Prefer minimal, targeted edits; keep headings and slide structure stable.
- When adding new materials, follow the naming rules in "File naming conventions".
