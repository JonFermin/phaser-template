import Phaser from "phaser";

export class Game extends Phaser.Scene {
  private box!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private moveSpeed = 200;

  constructor() {
    super("Game");
  }

  create() {
    const { width, height } = this.scale;

    // Generate a simple box texture
    const graphics = this.add.graphics();
    graphics.fillStyle(0x6c63ff, 1);
    graphics.fillRoundedRect(0, 0, 60, 60, 10);
    graphics.generateTexture("box", 60, 60);
    graphics.destroy();

    // Physics sprite
    this.box = this.physics.add.sprite(width / 2, height / 2, "box");
    this.box.setCollideWorldBounds(true);
    this.box.setBounce(0.2);

    // Input — action map via cursor keys
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Instructions
    this.add
      .text(
        width / 2,
        height - 40,
        "Arrow keys to move — Edit src/scenes/Game.ts to start building",
        {
          fontSize: "16px",
          color: "#888888",
          fontFamily: "Arial, sans-serif",
        },
      )
      .setOrigin(0.5);

    // Clean up on scene shutdown to prevent stale listeners
    this.events.on("shutdown", this.shutdown, this);
  }

  update(_time: number, _delta: number) {
    const body = this.box.body as Phaser.Physics.Arcade.Body;
    body.setVelocity(0);

    if (this.cursors.left.isDown) {
      body.setVelocityX(-this.moveSpeed);
    } else if (this.cursors.right.isDown) {
      body.setVelocityX(this.moveSpeed);
    }

    if (this.cursors.up.isDown) {
      body.setVelocityY(-this.moveSpeed);
    } else if (this.cursors.down.isDown) {
      body.setVelocityY(this.moveSpeed);
    }
  }

  shutdown() {
    this.events.off("shutdown", this.shutdown, this);
  }
}
