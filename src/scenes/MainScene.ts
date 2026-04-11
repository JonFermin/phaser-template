import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  private box!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private moveSpeed = 200;

  constructor() {
    super({ key: "MainScene" });
  }

  // Receives data from the previous scene; reset instance state here
  init(data: { startedAt?: number }) {
    if (data.startedAt) {
      console.log(`Game started at ${new Date(data.startedAt).toISOString()}`);
    }
  }

  create() {
    // Generate a simple box texture
    const graphics = this.add.graphics();
    graphics.fillStyle(0x6c63ff, 1);
    graphics.fillRoundedRect(0, 0, 60, 60, 10);
    graphics.generateTexture("box", 60, 60);
    graphics.destroy();

    // Physics sprite
    this.box = this.physics.add.sprite(400, 300, "box");
    this.box.setCollideWorldBounds(true);
    this.box.setBounce(0.2);

    // Input — action map via cursor keys
    this.cursors = this.input.keyboard!.createCursorKeys();

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
      "Arrow keys to move — Edit src/scenes/MainScene.ts to start building",
      {
        fontSize: "16px",
        color: "#888888",
        fontFamily: "Arial, sans-serif",
      },
    );
    instructions.setOrigin(0.5);

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
