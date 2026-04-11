import Phaser from "phaser";

export class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2 - 40, "Game Over", {
        fontSize: "48px",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 30, "Click to Restart", {
        fontSize: "20px",
        color: "#888888",
        fontFamily: "Arial, sans-serif",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("MainMenu");
    });
  }
}
