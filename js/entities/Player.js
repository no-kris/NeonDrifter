import { CONSTANTS } from "../constant.js";
import { GameState } from "../state.js";
import Entity from "./Entity.js";

class Player extends Entity {
  constructor(x, y) {
    super(x, y, CONSTANTS.TILE_SIZE, CONSTANTS.TILE_SIZE);
    this.color = "#0ff";
    this.speed = CONSTANTS.MOVE_SPEED;
    this.jumpForce = CONSTANTS.JUMP_FORCE;
    this.grounded = false;
    this.maxSpeed = CONSTANTS.MAX_SPEED;
    this.friction = CONSTANTS.FRICTION;
    this.dashForce = CONSTANTS.DASH_FORCE;
    this.fallSpeed = CONSTANTS.MAX_FALL_SPEED;
    this.dashCooldown = CONSTANTS.DASH_COOLDOWN;
    this.dashTimer = 0;
    this.isDashing = false;
    this.facingRight = true;
  }

  update(input) {
    if (this.dead) return;
    this.handleMovement(input);
    this.handleJump(input);
    // Horizontal movement and collsion check
    this.x += this.vx;
    this.checkDetection(true);
    // Vertical movement and collision check
    this.y += this.vy;
    this.grounded = false;
    this.checkDetection(false);
    this.checkBoundaries();
  }

  handleMovement(input) {
    if (this.isDashing) return;
    // Horizontal movement
    if (input.keys.left) this.vx -= this.speed;
    if (input.keys.right) this.vx += this.speed;
    this.vx *= this.friction;
    if (this.vx > this.maxSpeed) this.vx = this.maxSpeed;
    if (this.vx < -this.maxSpeed) this.vx = -this.maxSpeed;
  }

  handleJump(input) {
    this.vy += CONSTANTS.GRAVITY;
    if (this.vy > this.fallSpeed) this.vy = this.fallSpeed;
    if (input.keys.jump && this.grounded) {
      this.vy = this.jumpForce;
      this.grounded = false;
    }
  }

  checkDetection(isHorizontal) {
    this.grounded = false;
    for (const platform of GameState.platforms) {
      if (this.rectIntersect(platform)) {
        if (isHorizontal) {
          if (this.vx > 0) {
            this.x = platform.x - this.width;
            this.vx = 0;
          } else if (this.vx < 0) {
            this.x = platform.x + platform.width;
            this.vx = 0;
          }
        } else {
          if (this.vy > 0) {
            this.y = platform.y - this.height;
            this.vy = 0;
            this.grounded = true;
          } else if (this.vy < 0) {
            this.y = platform.y + platform.height;
            this.vy = 0;
          }
        }
      }
    }
  }

  checkBoundaries() {
    if (this.y > 2000) {
      this.die();
    }
  }

  die() {
    if (this.dead) return;
    this.dead = true;
  }

  draw(ctx) {
    if (Math.abs(this.vx) > 0.1) {
      this.facingRight = this.vx > 0;
    }
    ctx.save();
    // Move origin to center of player to add some movement effects to the player.
    ctx.translate(this.x, this.y + this.height);
    const skew = this.vx * -0.02;
    ctx.transform(1, 0, skew, 1, 0, 0);
    // Draw the body
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 20;
    ctx.shadowColor = this.color;
    ctx.fillRect(0, -this.height, this.width, this.height);
    ctx.shadowBlur = 0;
    // Draw the eye
    ctx.fillStyle = "black";
    const eyeX = this.facingRight ? this.width - 12 : 8;
    ctx.fillRect(eyeX, -this.height + 8, 6, 6);
    ctx.restore();
  }
}

export default Player;
