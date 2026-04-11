# Tech Stack

- You are building a 2D game with Phaser 3 and TypeScript.
- Use Vite as the build tool.
- Always put source code in the src/ folder.
- Put scenes into src/scenes/
- Put game objects/entities into src/entities/ (create when needed)
- Put utility functions into src/utils/ (create when needed)
- The entry point is src/main.ts which exports a StartGame() function and creates the Phaser.Game instance.

# Architecture

- Use Phaser's Scene system. Each distinct game state should be a separate Scene class.
- Follow the 5-scene lifecycle pattern: Boot → Preloader → MainMenu → Game → GameOver.
  - **Boot** (src/scenes/Boot.ts): Loads only assets needed by the Preloader (e.g., a loading screen background).
  - **Preloader** (src/scenes/Preloader.ts): Loads all game assets with a visual progress bar.
  - **MainMenu** (src/scenes/MainMenu.ts): Title screen with "click to start" interaction.
  - **Game** (src/scenes/Game.ts): Core gameplay scene.
  - **GameOver** (src/scenes/GameOver.ts): End state, transitions back to MainMenu.
- Use Phaser's built-in Arcade Physics for collisions and movement. Only switch to Matter.js physics if the user explicitly requests realistic physics.
- Use Phaser's asset loader (this.load) in preload() methods. Two approaches for assets:
  - **Static references**: Place files in public/assets/ and reference as `'assets/images/player.png'`. Best for large assets (audio, video, tilemaps).
  - **Bundled imports**: Use `import img from './assets/logo.png'` for smaller assets that benefit from Vite's hashing and optimization.
- Use Phaser's built-in input system (this.input) for keyboard, mouse, and touch.
- Use Phaser's Tween system for animations, not manual interpolation.
- Use Phaser's Timer events (this.time.addEvent) instead of setTimeout/setInterval.

# Code Style

- Do NOT use React, HTML DOM elements, or CSS for game rendering. Everything renders on the Phaser canvas.
- Do NOT install or use shadcn/ui, Tailwind CSS, or any UI component library.
- Keep game configuration (dimensions, physics settings, scene list) in src/main.ts.
- The game mounts into a DOM container via the `parent` config property (default: `'game-container'`).
- Use TypeScript interfaces for game data structures (player stats, level config, etc.).
- Use Phaser's GameObjects (Sprite, Image, Text, Graphics) for all visual elements.
- For UI overlays (score, health bars), use Phaser's Text and Graphics objects positioned with setScrollFactor(0), NOT HTML/CSS overlays.

# Common Patterns

- Responsive scaling: use Phaser.Scale.FIT or Phaser.Scale.RESIZE in the game config.
- Sprite sheets: load with this.load.spritesheet() and create animations with this.anims.create().
- Tilemaps: load JSON tilemaps with this.load.tilemapTiledJSON().
- Sound: use this.sound.play() after loading audio in preload.
- Particle effects: use this.add.particles() with emitter configs.
- Scene transitions: use this.scene.start('SceneKey', optionalData) to switch scenes.
- Data passing: pass objects between scenes via this.scene.start('Next', { score: 100 }) and receive in init(data).
