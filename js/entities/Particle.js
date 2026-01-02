import { GameState } from "../state.js";
import Entity from "./Entity.js";

class Particle extends Entity {
  constructor(x, y, color, vx, vy, life) {
    super(x, y, 6, 6);
    this.color = color;
    this.vx = vx;
    this.vy = vy;
    this.life = life;
    this.maxLife = life;
  }

  update() {
    super.update();
    this.life--;
    if (this.life <= 0) this.dead = true;
  }

  draw(ctx) {
    ctx.globalAlpha = this.life / this.maxLife;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.globalAlpha = 1;
  }

  static spawnParticles(x, y, isDeath = false) {
    let amount = isDeath ? 20 : 3;
    for (let i = 0; i < amount; i++) {
      // Explosion in all directions
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      GameState.particles.push(new Particle(x, y, "#0ff", vx, vy, 60));
    }
  }
}

export default Particle;
