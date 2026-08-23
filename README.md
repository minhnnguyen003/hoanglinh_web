# Hoang Linh Agricultural Services Website

[Tiếng Việt](README.vi.md)

A Nuxt website for Hoang Linh Agricultural Services. It presents the company, its animal-feed ingredients, news, and contact information.

## Technology

- Nuxt 4 and Vue 3
- Vite
- Sass
- Nuxt Sitemap and Robots modules

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Nuxt development server. |
| `npm run build` | Create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run start` | Start the generated Nitro server. |
| `npm run generate` | Generate a static version of the website. |
| `npm run check:commit` | Run the required pre-commit validation. |

## Quality checks

The repository uses a Husky `pre-commit` hook. Every normal Git commit runs:

```bash
npm run check:commit
```

This command currently runs `npm run build`; a failed build cancels the commit. An automated `npm test` suite has not been configured yet.

You can run the same check manually before committing:

```bash
npm run check:commit
```

## Project structure

```text
app/
  assets/        # Images and Sass styles
  components/    # Shared and homepage Vue components
  layouts/       # Application layouts
  pages/         # File-based routes
public/          # Public static files
.husky/          # Git hooks
```

## Production build

Build and preview the application locally:

```bash
npm run build
npm run preview
```
