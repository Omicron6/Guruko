# Guruko

Guruko is a classroom assistant designed to help teachers run clearer, more engaging lessons. This repository contains the application UI: interactive lesson views, an onboarding flow, and components to power a live teaching experience.

## Features

- Onboarding flow to capture teacher preferences
- Live session and quick-prompt UI for lesson pacing
- Responsive marketing/home page and app shell
- Simple server-function scaffold for later integrations

## Quick start (development)

Install dependencies and run locally:

```bash
npm install
npm run dev
# open http://localhost:5173
```

## Build & preview

```bash
npm run build
npm run preview
```

## Deploy

Recommended: Vercel — connect your GitHub repository, set the build command to `npm run build`, and the output directory to `dist`.

Static hosts like Netlify or Cloudflare Pages also work for a frontend-only deployment.

## Notes

- This repo focuses on the frontend. Persistence (database), authentication, and external services are not included — add them when needed.
- Environment variables and server integrations should be configured in your deployment platform (Vercel/Netlify) when you add backend dependencies.

## Contributing

Make changes on feature branches and open a pull request. Run `npm run lint` and `npm run format` before committing.

