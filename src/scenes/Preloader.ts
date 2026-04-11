import Phaser from "phaser";

export class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    const { width, height } = this.scale;
    const barX = width / 2 - 160;
    const barY = height / 2;

    // Progress bar background
    const bg = this.add.graphics();
    bg.fillStyle(0x444444, 1);
    bg.fillRect(barX, barY, 320, 20);

    // Progress bar fill
    const fill = this.add.graphics();

    this.load.on("progress", (value: number) => {
      fill.clear();
      fill.fillStyle(0x6c63ff, 1);
      fill.fillRect(barX, barY, 320 * value, 20);
    });

    this.load.on("complete", () => {
      bg.destroy();
      fill.destroy();
    });
  }

  preload() {
    // Load all game assets here
    // Example: this.load.image('player', 'assets/images/player.png');
    // Example: this.load.spritesheet('character', 'assets/images/character.png', { frameWidth: 32, frameHeight: 32 });
    // Example: this.load.audio('bgm', 'assets/audio/bgm.mp3');
    // Example: this.load.tilemapTiledJSON('level1', 'assets/data/level1.json');
  }

  create() {
    this.scene.start("MainMenu");
  }
}
