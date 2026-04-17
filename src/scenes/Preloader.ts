import Phaser from "phaser";

export class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    const { width, height } = this.scale;
    const barX = width / 2 - 160;
    const barY = height / 2;

    const bg = this.add.graphics();
    bg.fillStyle(0x444444, 1);
    bg.fillRect(barX, barY, 320, 20);

    const fill = this.add.graphics();

    const onProgress = (value: number) => {
      fill.clear();
      fill.fillStyle(0x6c63ff, 1);
      fill.fillRect(barX, barY, 320 * value, 20);
    };
    this.load.on(Phaser.Loader.Events.PROGRESS, onProgress);
    this.load.once(Phaser.Loader.Events.COMPLETE, () => {
      this.load.off(Phaser.Loader.Events.PROGRESS, onProgress);
      bg.destroy();
      fill.destroy();
    });

    // Declarative asset pack (edit public/assets/asset-pack.json to add assets).
    // Alternatively load inline:
    //   this.load.image('player', 'assets/images/player.png');
    //   this.load.spritesheet('char', 'assets/images/char.png', { frameWidth: 32, frameHeight: 32 });
    //   this.load.audio('bgm', 'assets/audio/bgm.mp3');
    //   this.load.tilemapTiledJSON('level1', 'assets/data/level1.json');
    this.load.pack("main-pack", "assets/asset-pack.json");
  }

  create() {
    this.scene.start("MainMenu");
  }
}
