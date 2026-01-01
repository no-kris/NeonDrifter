import GameSystem from "./systems/GameSystem.js";

const game = new GameSystem("game-canvas");

function gameLoop() {
  game.draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
