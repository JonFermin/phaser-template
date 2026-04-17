import Phaser from "phaser";
import { Boot } from "@scenes/Boot";
import { Preloader } from "@scenes/Preloader";
import { MainMenu } from "@scenes/MainMenu";
import { Game } from "@scenes/Game";
import { GameOver } from "@scenes/GameOver";

export function StartGame(parent: string) {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    // pixelArt: true, // Enable for pixel art games — prevents texture blurring on scale
    parent,
    backgroundColor: "#1a1a2e",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 },
        debug: import.meta.env.DEV,
      },
    },
    scene: [Boot, Preloader, MainMenu, Game, GameOver],
  };

  return new Phaser.Game(config);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => StartGame("game-container"));
} else {
  StartGame("game-container");
}
