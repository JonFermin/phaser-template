# Phaser.js 2D Game Template

A minimal starter template for 2D game development with [Phaser 3](https://phaser.io/), [Vite](https://vitejs.dev/), and TypeScript.

This template is designed to be used with [Dyad](https://dyad.sh) as a starting point for AI-assisted 2D game projects.

## Tech Stack

- **Phaser 3.90** — HTML5 2D game framework
- **Vite 6** — fast dev server and bundler
- **TypeScript 5.7**

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal.

## Scripts

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check and build for production
- `npm run build:dev` — build without type-checking (faster iteration)
- `npm run preview` — preview the production build locally

## Project Structure

```
src/
  main.ts        # entry point, game config
  scenes/        # Phaser scenes
  entities/      # sprites, players, enemies
  utils/         # helpers
public/          # static assets (served at /)
```

## Built With Dyad

This template is part of the official Dyad template collection. Fork it, remix it, or use it as a base for your own 2D games.
