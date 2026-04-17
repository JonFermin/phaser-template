import Phaser from "phaser";
import { fadeToScene } from "@utils/transition";

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

    // First user gesture — unlocks WebAudio on mobile. Don't move the first
    // click earlier (e.g. into Preloader) or audio will silently fail to play.
    this.input.once("pointerdown", () => {
      fadeToScene(this, "Game");
    });
  }
}
