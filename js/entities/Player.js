import { CONSTANTS } from "../constant.js";
import Entity from "./Entity.js";

class Player extends Entity {
  constructor(x, y) {
    super(x, y, CONSTANTS.TILE_SIZE, CONSTANTS.TILE_SIZE);
    this.color = "#0ff";
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 20;
    ctx.shadowColor = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.shadowBlur = 0;
  }
}

export default Player;
