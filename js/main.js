import GameSystem from "./systems/GameSystem.js";
import InputSystem from "./systems/InputSystem.js";
import LevelManager from "./systems/LevelManager.js";

const game = new GameSystem("game-canvas");
const levelManager = new LevelManager();
const inputSystem = new InputSystem();

levelManager.loadLevel(1);

function gameLoop() {
  game.draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
