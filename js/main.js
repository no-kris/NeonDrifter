import GameSystem from "./systems/GameSystem.js";
import LevelManager from "./systems/LevelManager.js";

const game = new GameSystem("game-canvas");
const levelManager = new LevelManager();

levelManager.loadLevel(1);

function gameLoop() {
  game.draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
