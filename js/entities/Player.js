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
    this.glitchDistance = 1;
    this.glitchCharge = 0;

    this.isGlitching = false;
    this.glitchTimer = 0;
    this.glitchDuration = 8; // How many frames the dash takes
    this.glitchstartX = 0;
    this.glitchTargetX = 0;
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
    this.handleGlitchCharge();
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

  handleGlitchCharge() {
    if (Math.abs(this.vx) > 1 || Math.abs(this.vy) > 1) {
      this.glitchCharge += 0.5 + Math.random();
      if (this.glitchCharge >= CONSTANTS.GLITCH_THRESHOLD) {
        this.glitchCharge = CONSTANTS.GLITCH_THRESHOLD;
        this.triggerGlitchEffect();
      }
    } else {
      this.glitchCharge = Math.max(0, this.glitchCharge - 0.5);
    }
  }

  triggerGlitchEffect() {
    this.glitchCharge = 0;
    const direction = this.facingRight ? 1 : -1;
    this.x += direction * 200;
    this.vx = 0;
  }

  shake(ctx) {
    if (this.glitchCharge > 20) {
      const shakeIntensity =
        (this.glitchCharge / CONSTANTS.GLITCH_THRESHOLD) * 4;
      const shakeX = (Math.random() - 0.5) * shakeIntensity;
      const shakeY = (Math.random() - 0.5) * shakeIntensity;
      ctx.translate(shakeX, shakeY);
    }
  }

  draw(ctx) {
    if (Math.abs(this.vx) > 0.1) {
      this.facingRight = this.vx > 0;
    }
    ctx.save();
    // Move origin to bottom-left of player to add some movement effects to the player.
    ctx.translate(this.x, this.y + this.height);
    // Adding a skew to make the player look like they're leaning as they move forward.
    const skew = this.vx * -0.02;
    ctx.transform(1, 0, skew, 1, 0, 0);
    this.shake(ctx);
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
