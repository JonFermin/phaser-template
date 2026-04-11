import Phaser from "phaser";

export class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    // Load only the minimal assets needed by the Preloader scene
    // Example: this.load.image('preloader-bg', 'assets/images/preloader-bg.png');
  }

  create() {
    this.scene.start("Preloader");
  }
}
