import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  create() {
    // Create a simple colored rectangle as the bouncing object
    const graphics = this.add.graphics();
    graphics.fillStyle(0x6c63ff, 1);
    graphics.fillRoundedRect(0, 0, 60, 60, 10);
    graphics.generateTexture("box", 60, 60);
    graphics.destroy();

    const box = this.physics.add.sprite(400, 300, "box");
    box.setCollideWorldBounds(true);
    box.setBounce(1);
    box.setVelocity(
      Phaser.Math.Between(-200, 200),
      Phaser.Math.Between(-200, 200),
    );

    // Ensure minimum velocity so it doesn't appear stuck
    if (Math.abs(box.body!.velocity.x) < 100) box.setVelocityX(150);
    if (Math.abs(box.body!.velocity.y) < 100) box.setVelocityY(150);

    // Title text
    const title = this.add.text(400, 80, "Phaser Game", {
      fontSize: "32px",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
    });
    title.setOrigin(0.5);

    // Instructions
    const instructions = this.add.text(
      400,
      520,
      "Edit src/scenes/MainScene.ts to start building",
      {
        fontSize: "16px",
        color: "#888888",
        fontFamily: "Arial, sans-serif",
      },
    );
    instructions.setOrigin(0.5);
  }
}
