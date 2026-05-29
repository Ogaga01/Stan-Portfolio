# Stanley Osi Portfolio

A single-page personal portfolio for Stanley Osi, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

- `src/App.tsx` composes the page sections.
- `src/components/` contains the portfolio sections and cards.
- `src/types/posts.ts` contains writing links shown in the writing section.
- `src/types/works.ts` contains selected work entries shown in the work section.
- `src/index.css` contains Tailwind directives, global base styles, and small shared utilities.
- `tailwind.config.js` contains theme tokens, font families, and dark mode configuration.
- `public/_redirects` provides a static host fallback to `index.html`.

## Styling

The UI is styled with Tailwind CSS utility classes. Dark mode uses Tailwind's class strategy and is controlled from `src/App.tsx`. The selected theme is stored in `localStorage`; first-time visitors inherit their system preference.

## Updating Content

Edit work entries in `src/types/works.ts`. Each item needs a title, organization, description, image, and external link.

Edit writing entries in `src/types/posts.ts`. Images referenced with `/images/...` should live in `public/images`.

## Deployment

The app builds to `dist/` through Vite. Static hosts such as Netlify can serve that output directly. The included `public/_redirects` file supports client-side fallback routing if routes are added later.
