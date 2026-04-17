import Phaser from "phaser";

const TEXTURE_KEY = "player";

export class Player extends Phaser.Physics.Arcade.Sprite {
  private moveSpeed = 200;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    ensureTexture(scene);
    super(scene, x, y, TEXTURE_KEY);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.setBounce(0.2);
  }

  move(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    const body = this.body as Phaser.Physics.Arcade.Body;
    body.setVelocity(0);

    if (cursors.left.isDown) body.setVelocityX(-this.moveSpeed);
    else if (cursors.right.isDown) body.setVelocityX(this.moveSpeed);

    if (cursors.up.isDown) body.setVelocityY(-this.moveSpeed);
    else if (cursors.down.isDown) body.setVelocityY(this.moveSpeed);
  }
}

function ensureTexture(scene: Phaser.Scene) {
  if (scene.textures.exists(TEXTURE_KEY)) return;
  const g = scene.add.graphics();
  g.fillStyle(0x6c63ff, 1);
  g.fillRoundedRect(0, 0, 60, 60, 10);
  g.generateTexture(TEXTURE_KEY, 60, 60);
  g.destroy();
}
