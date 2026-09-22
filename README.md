# Portfolio — Vihas Sanchith

Personal portfolio site built with Next.js (App Router), Tailwind CSS, and Motion.

## Stack

- Next.js (JavaScript, no TypeScript)
- Tailwind CSS v4
- Motion (`motion/react`) for animation
- lucide-react for icons

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/            Routes: / , /about , /projects , /projects/[slug]
  components/     Shared UI (Nav, Footer, cards, gallery, lightbox, etc.)
  data/           Editable content: profile.js, projects.js
public/
  resources/      Images referenced by data/ (profile photo, project screenshots)
```

To update site content (bio, stack, project details), edit the files in `src/data/` — nothing else needs to change.
