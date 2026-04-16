# phaser-template

Phaser 3 game template using TypeScript and Vite with 5-scene lifecycle.

## Quick Reference

See [AI_RULES.md](./AI_RULES.md) for all coding conventions, architecture rules, and common patterns. Always follow them.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck + production build
- `npm run build:dev` — production build (skip typecheck)
- `npm run preview` — preview production build

## Project Structure

- `src/main.ts` — entry point, exports `StartGame()` and creates Phaser.Game
- `src/scenes/` — Boot, Preloader, MainMenu, Game, GameOver
- `src/entities/` — game object classes
- `src/utils/` — utility functions
- `public/assets/` — static game assets

## Key Rules

- Follow the 5-scene lifecycle: Boot -> Preloader -> MainMenu -> Game -> GameOver
- Use Arcade Physics by default (Matter.js only if explicitly needed)
- No React, no HTML DOM rendering, no CSS UI libraries — use Phaser's Text/Graphics for UI
