class Entity {
  constructor(x, y, w = 0, h = 0) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = 0;
    this.vy = 0;
    this.dead = false;
  }

  update(dt = 1) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  draw(ctx, camera) {}

  rectIntersect(obj) {
    return (
      this.x < obj.x + obj.width &&
      this.x + this.width > obj.x &&
      this.y < obj.y + obj.height &&
      this.y + this.height > obj.y
    );
  }
}

export default Entity;
