# phaser-template

Phaser 3 game template using TypeScript and Vite with 5-scene lifecycle.

## Quick Reference

See [AI_RULES.md](./AI_RULES.md) for all coding conventions, architecture rules, and common patterns. Always follow them.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck + production build
- `npm run build:dev` — production build (skip typecheck)
- `npm run preview` — preview production build
- `npm run lint` — ESLint over `src/`
- `npm test` — run Vitest suite once (`npm run test:watch` for watch mode)

## Project Structure

- `src/main.ts` — entry point, exports `StartGame()` and creates Phaser.Game
- `src/scenes/` — Boot, Preloader, MainMenu, Game, GameOver
- `src/entities/` — game object classes (e.g. Player)
- `src/utils/` — utilities:
  - `logger.ts` — env-gated `log()` / `warn()` / `error()`
  - `EventBus.ts` — singleton `Phaser.Events.EventEmitter` for cross-scene pub/sub
  - `transition.ts` — `fadeToScene(scene, key, data?)` camera-fade helper
  - `storage.ts` — `save()` / `load()` / `clear()` localStorage wrappers
- `public/assets/` — static game assets
  - `asset-pack.json` — declarative asset manifest loaded in Preloader

## Path Aliases

Imports use `@scenes/*`, `@entities/*`, `@utils/*` — configured in `tsconfig.json` and `vite.config.ts`.

## Key Rules

- Follow the 5-scene lifecycle: Boot -> Preloader -> MainMenu -> Game -> GameOver
- Use Arcade Physics by default (Matter.js only if explicitly needed)
- No React, no HTML DOM rendering, no CSS UI libraries — use Phaser's Text/Graphics for UI
- Arcade `debug` is auto-enabled in `npm run dev`, disabled in `npm run build`
