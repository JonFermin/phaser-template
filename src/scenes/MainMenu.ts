import Phaser from "phaser";

export class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2 - 60, "Phaser Game", {
        fontSize: "48px",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 20, "Click to Start", {
        fontSize: "20px",
        color: "#888888",
        fontFamily: "Arial, sans-serif",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
