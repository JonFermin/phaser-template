import Phaser from "phaser";

export function fadeToScene(
  scene: Phaser.Scene,
  key: string,
  data?: object,
  duration = 300,
) {
  const cam = scene.cameras.main;
  cam.fadeOut(duration, 0, 0, 0);
  cam.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
    scene.scene.start(key, data);
  });
}
