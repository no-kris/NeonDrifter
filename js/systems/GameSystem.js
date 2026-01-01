import { CONSTANTS } from "../constant.js";
import { GameState } from "../state.js";

class GameSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    // Resize window to keep canvas in full screen
    window.addEventListener("resize", () => this.resize());
    this.resize();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  draw() {
    this.ctx.fillStyle = "#0a0a10";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGrid();
    this.drawMap();
    this.drawPlayer();
  }

  // Draws the grid background
  drawGrid() {
    const tileSize = CONSTANTS.TILE_SIZE;
    this.ctx.strokeStyle = "#1a1a24";
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    // Vertical lines
    for (let x = 0; x <= this.canvas.width; x += tileSize) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
    }
    // Horizontal lines
    for (let y = 0; y <= this.canvas.height; y += tileSize) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
    }
    this.ctx.stroke();
  }

  drawMap() {
    GameState.platforms.forEach((platform) => {
      this.ctx.fillStyle = platform.color;
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = platform.color;
      this.ctx.fillRect(
        platform.x,
        platform.y,
        platform.width,
        platform.height
      );
      this.ctx.shadowBlur = 0;
    });
  }

  drawPlayer() {
    const player = GameState.player;
    if (player) {
      player.draw(this.ctx);
    }
  }
}

export default GameSystem;
