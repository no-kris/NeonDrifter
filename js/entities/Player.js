import { CONSTANTS } from "../constant.js";
import { GameState } from "../state.js";
import Entity from "./Entity.js";
import Particle from "./Particle.js";

class Player extends Entity {
  constructor(x, y) {
    super(x, y, CONSTANTS.TILE_SIZE, CONSTANTS.TILE_SIZE);
    this.color = "#0ff";
    this.speed = CONSTANTS.MOVE_SPEED;
    this.jumpForce = CONSTANTS.JUMP_FORCE;
    this.maxSpeed = CONSTANTS.MAX_SPEED;
    this.friction = CONSTANTS.FRICTION;
    this.fallSpeed = CONSTANTS.MAX_FALL_SPEED;
    this.dashCooldown = CONSTANTS.DASH_COOLDOWN;
    this.grounded = false;
    this.dashTimer = 0;
    this.activeDashTimer = 0;
    this.isDashing = false;
    this.facingRight = true;
    this.glitchDistance = 1;
    this.glitchCharge = 0;
    this.justGlitched = false;
    this.hasWon = false;
    this.lastSafeX = x;
    this.lastSafeY = y;
  }

  update(input, dt = 1) {
    if (this.dead) return;
    if (this.grounded) {
      this.lastSafeX = this.x;
      this.lastSafeY = this.y;
    }
    // Movement handlers
    this.handleMovement(input, dt);
    this.handleJump(input, dt);
    this.handleDash(input, dt);
    // Horizontal movement and collsion check
    this.x += this.vx * dt;
    this.checkDetection(true);
    // Vertical movement and collision check
    this.y += this.vy * dt;
    this.grounded = false;
    this.checkDetection(false);
    this.checkBoundaries();
    this.checkHazards();
    this.checkGoal();
    this.handleGlitchCharge(dt);
  }

  handleMovement(input, dt) {
    if (this.isDashing) return;
    // Horizontal movement
    if (input.keys.left) this.vx -= this.speed * dt;
    if (input.keys.right) this.vx += this.speed * dt;
    this.vx *= Math.pow(this.friction, dt);
    if (this.vx > this.maxSpeed) this.vx = this.maxSpeed;
    if (this.vx < -this.maxSpeed) this.vx = -this.maxSpeed;
  }

  handleJump(input, dt) {
    this.vy += CONSTANTS.GRAVITY * dt;
    if (this.vy > this.fallSpeed) this.vy = this.fallSpeed;
    if (input.keys.jump && this.grounded) {
      this.vy = this.jumpForce;
      this.grounded = false;
    }
  }

  handleDash(input, dt) {
    if (this.activeDashTimer > 0) {
      this.activeDashTimer -= dt;
      const dir = this.facingRight ? 1 : -1;
      this.vx = dir * CONSTANTS.DASH_FORCE;
      this.vy = 0;
      return;
    }
    if (this.dashTimer > 0) {
      this.dashTimer -= dt;
      this.isDashing = false;
      return;
    }
    if (input.keys.dash) {
      this.dashTimer = this.dashCooldown;
      this.activeDashTimer = CONSTANTS.DASH_DURATION;
      this.isDashing = true;
      this.justGlitched = true;
      Particle.spawnParticles(
        this.x + this.width / 2,
        this.y + this.height / 2
      );
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
      if (Math.random() < 0.2)
        this.triggerPlayerRescue(); // 20% chance for player to be rescued from fall
      else {
        Particle.spawnParticles(this.x, this.y, true);
        this.die();
      }
    }
  }

  triggerPlayerRescue() {
    this.x = this.lastSafeX;
    this.y = this.lastSafeY - this.height - 2;
    this.vx = 0;
    this.vy = 0;
    this.glitchCharge = 0;
    const glitchMsg = document.querySelector(".glitch-save-msg");
    glitchMsg.classList.remove("hidden");
    setTimeout(() => glitchMsg.classList.add("hidden"), 1500);
  }

  checkHazards() {
    for (const hazard of GameState.hazards) {
      if (this.rectIntersect(hazard)) {
        Particle.spawnParticles(this.x, this.y, true);
        this.die();
      }
    }
  }

  checkGoal() {
    if (GameState.goal && this.rectIntersect(GameState.goal)) {
      this.hasWon = true;
    }
  }

  die() {
    if (this.dead) return;
    this.dead = true;
  }

  handleGlitchCharge(dt) {
    if (Math.abs(this.vx) > 1 || Math.abs(this.vy) > 1) {
      this.glitchCharge += (0.5 + Math.random()) * dt;
      if (this.glitchCharge >= CONSTANTS.GLITCH_THRESHOLD) {
        this.glitchCharge = CONSTANTS.GLITCH_THRESHOLD;
        this.triggerGlitchEffect(dt);
      }
    } else {
      this.glitchCharge = Math.max(0, this.glitchCharge - 0.5 * dt);
    }
  }

  triggerGlitchEffect() {
    this.glitchCharge = 0;
    const direction = this.facingRight ? 1 : -1;
    this.x += direction * 300;
    this.vx = direction * 20;
    this.justGlitched = true;
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
    if (this.dead) return;
    if (Math.abs(this.vx) > 0.1) {
      this.facingRight = this.vx > 0;
    }
    ctx.save();
    // Move origin to bottom-left of player to add some movement effects to the player.
    ctx.translate(this.x, this.y + this.height);
    // Adding a skew to make the player look like they're leaning as they move forward.
    let skew = this.vx * -0.02;
    if (skew > 0.4) skew = 0.4;
    if (skew < -0.4) skew = -0.4;
    ctx.transform(1, 0, skew, 1, 0, 0);
    this.shake(ctx);
    // Draw the body
    ctx.fillStyle = GameState.colors.primary;
    ctx.shadowBlur = 10;
    ctx.shadowColor = GameState.colors.primary;
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
