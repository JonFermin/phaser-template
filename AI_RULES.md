# Tech Stack

- You are building a 2D game with Phaser 3 and TypeScript.
- Use Vite as the build tool.
- Always put source code in the src/ folder.
- Put scenes into src/scenes/
- Put game objects/entities into src/entities/ (create when needed)
- Put utility functions into src/utils/ (create when needed)
- The entry point is src/main.ts which creates the Phaser.Game instance.

# Architecture

- Use Phaser's Scene system. Each distinct game state (menu, gameplay, game over) should be a separate Scene class.
- Use Phaser's built-in Arcade Physics for collisions and movement. Only switch to Matter.js physics if the user explicitly requests realistic physics.
- Use Phaser's asset loader (this.load) in the preload() method of scenes. Put static assets in public/assets/.
- Use Phaser's built-in input system (this.input) for keyboard, mouse, and touch.
- Use Phaser's Tween system for animations, not manual interpolation.
- Use Phaser's Timer events (this.time.addEvent) instead of setTimeout/setInterval.

# Code Style

- Do NOT use React, HTML DOM elements, or CSS for game rendering. Everything renders on the Phaser canvas.
- Do NOT install or use shadcn/ui, Tailwind CSS, or any UI component library.
- Keep game configuration (dimensions, physics settings, scene list) in src/main.ts.
- Use TypeScript interfaces for game data structures (player stats, level config, etc.).
- Use Phaser's GameObjects (Sprite, Image, Text, Graphics) for all visual elements.
- For UI overlays (score, health bars), use Phaser's Text and Graphics objects positioned with setScrollFactor(0), NOT HTML/CSS overlays.

# Common Patterns

- Responsive scaling: use Phaser.Scale.FIT or Phaser.Scale.RESIZE in the game config.
- Sprite sheets: load with this.load.spritesheet() and create animations with this.anims.create().
- Tilemaps: load JSON tilemaps with this.load.tilemapTiledJSON().
- Sound: use this.sound.play() after loading audio in preload.
- Particle effects: use this.add.particles() with emitter configs.
