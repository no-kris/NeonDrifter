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

  draw(camera) {
    this.ctx.fillStyle = "#0a0a10";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    if (camera) {
      this.ctx.scale(camera.zoom, camera.zoom);
      this.ctx.translate(-camera.x, -camera.y);
    }
    this.drawGrid(camera);
    this.drawMap();
    this.drawHazards();
    this.drawParticle();
    this.drawPlayer();
    this.ctx.restore();
  }

  // Draws the grid background
  drawGrid(camera) {
    const tileSize = CONSTANTS.TILE_SIZE;
    this.ctx.strokeStyle = "#1a1a24";
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    let startX = 0,
      startY = 0;
    let endX = this.canvas.width,
      endY = this.canvas.height;
    if (camera) {
      startX = camera.x;
      startY = camera.y;
      endX = camera.x + this.canvas.width / camera.zoom;
      endY = camera.y + this.canvas.height / camera.zoom;
    }
    const gridStartX = Math.floor(startX / tileSize) * tileSize * 4;
    const gridStartY = Math.floor(startY / tileSize) * tileSize * 4;
    // Vertical lines
    for (let x = gridStartX; x <= endX; x += tileSize * 4) {
      this.ctx.moveTo(x, startY);
      this.ctx.lineTo(x, endY);
    }
    // Horizontal lines
    for (let y = gridStartY; y <= endY; y += tileSize * 4) {
      this.ctx.moveTo(startX, y);
      this.ctx.lineTo(endX, y);
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

  drawHazards() {
    GameState.hazards.forEach((hazard) => {
      this.ctx.fillStyle = hazard.color || "#ff0000";
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = hazard.color || "#ff0000";
      this.ctx.fillRect(hazard.x, hazard.y, hazard.width, hazard.height);
      // White pulsating stripe
      if (Math.random() > 0.9) {
        this.ctx.fillStyle = "#ffffffff";
        this.ctx.fillRect(
          hazard.x + Math.random() * hazard.width,
          hazard.y,
          5,
          hazard.height
        );
      }
      this.ctx.shadowBlur = 0;
    });
  }

  drawParticle() {
    GameState.particles.forEach((particle) => {
      particle.draw(this.ctx);
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
