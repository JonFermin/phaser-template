import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    // Progress bar background
    const { width, height } = this.scale;
    const barX = width / 2 - 160;
    const barY = height / 2;

    const bg = this.add.graphics();
    bg.fillStyle(0x444444, 1);
    bg.fillRect(barX, barY, 320, 20);

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

    // Placeholder load — replace with your actual assets
    // Example: this.load.image('player', 'assets/images/player.png');
    // Example: this.load.audio('bgm', 'assets/audio/bgm.mp3');
  }

  create() {
    // Pass data to the next scene to demonstrate scene data transfer
    this.scene.start("MainScene", { startedAt: Date.now() });
  }
}
