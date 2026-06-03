# Guruko

Guruko helps teachers manage modern classrooms where information is everywhere and attention is scarce. It provides real-time, classroom-aware guidance to help teachers keep students engaged, adapt explanations on the fly, and run interactive activities with minimal setup.

## Features

- Onboarding flow to capture teacher preferences
- Live session and quick-prompt UI for lesson pacing
- Responsive marketing/home page and app shell
- Simple server-function scaffold for later integrations

## Problem

Students learn from many sources today (video, short clips, AI), so classrooms must become experience-driven rather than information-only. Teachers need help keeping attention, adapting explanations, and running activities in diverse, often low-connectivity settings.

## Who it's for

- Teachers in middle and high school classes
- Classrooms with limited infrastructure (blackboard-only, projector, or low-connectivity)
- Multilingual and mixed-ability groups

## What Guruko does

- Detects engagement dips and suggests recovery actions
- Provides contextual analogies, language-switching, and activity suggestions
- Offers visual and classroom-ready prompts for projectors or smart boards
- Helps teachers reflect and adjust explanations after sessions

## Why AI

Classroom dynamics change minute-to-minute. AI enables fast, contextual adaptation and bilingual explanations that static lesson plans cannot provide.

## Tech snapshot

- Frontend: React, TypeScript, Tailwind CSS (PWA-ready)
- Server: scaffolded server functions (add your backend as needed)
- Deploy: static build via Vite (`npm run build`) — recommended hosts: Vercel, Netlify, Cloudflare Pages

## Quick start

```bash
npm install
npm run dev
# open http://localhost:5173
```

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

