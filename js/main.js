import { GameState } from "./state.js";
import Camera from "./systems/Camera.js";
import GameSystem from "./systems/GameSystem.js";
import InputSystem from "./systems/InputSystem.js";
import LevelManager from "./systems/LevelManager.js";

const game = new GameSystem("game-canvas");
const levelManager = new LevelManager();
const inputSystem = new InputSystem();
const camera = new Camera(window.innerWidth, window.innerHeight, 0.6);

window.addEventListener("resize", () => {
  camera.width = window.innerWidth;
  camera.height = window.innerHeight;
});

levelManager.loadLevel(1);

function gameLoop() {
  if (GameState.player) {
    GameState.player.update(inputSystem);
    camera.update(GameState.player);
    // Check for death
    if (GameState.player.dead) {
      levelManager.loadLevel(levelManager.currentLevel);
      camera.x = 0;
      camera.y = 0;
      return requestAnimationFrame(gameLoop);
    }
  }
  game.draw(camera);
  requestAnimationFrame(gameLoop);
}

gameLoop();
