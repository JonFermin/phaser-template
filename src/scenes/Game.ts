import Phaser from "phaser";
import { Player } from "@entities/Player";
import { EventBus } from "@utils/EventBus";

export class Game extends Phaser.Scene {
  private player!: Player;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("Game");
  }

  create() {
    const { width, height } = this.scale;

    this.player = new Player(this, width / 2, height / 2);
    this.cursors = this.input.keyboard!.createCursorKeys();

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

    // Listeners registered on objects that outlive this scene (EventBus, DOM,
    // registry) must be removed on shutdown, or they leak across scene restarts.
    const onHit = () => this.cameras.main.shake(100, 0.01);
    EventBus.on("player-hit", onHit);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      EventBus.off("player-hit", onHit);
    });
  }

  update() {
    this.player.move(this.cursors);
  }
}
