# phaser-template-refine

Refined Phaser 3 game template with entity pattern, input controller, and centralized config.

## Quick Reference

See [AI_RULES.md](./AI_RULES.md) for all coding conventions, architecture rules, entity pattern, and input handling. Always follow them.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck + production build
- `npm run build:dev` — production build (skip typecheck)
- `npm run preview` — preview production build

## Project Structure

- `src/main.ts` — entry point, creates Phaser.Game
- `src/config.ts` — game constants and scene keys
- `src/scenes/` — Boot, Preloader, MainMenu, Game, GameOver
- `src/entities/` — game object classes with `update()` methods
- `src/input/` — InputController for keyboard handling
- `src/utils/` — utility functions

## Key Rules

- Use scene keys from `src/config.ts` (`SCENES` constant) for transitions
- Entities accept dependencies via `update()` — never grab globals or `scene.input` directly
- Use InputController from `src/input/` — instantiate in scene `create()`, pass to entities in `update()`
- No React, no HTML DOM rendering, no CSS UI libraries — use Phaser's Text/Graphics for UI
