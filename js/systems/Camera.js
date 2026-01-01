class Camera {
  constructor(width, height, zoom = 1.0) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.zoom = zoom;
  }

  update(target, mapWidth, mapHeight) {
    if (!target) return;
    // Formula: TargetPosition - (ScreenHalf / Zoom)
    // Dividing by zoom to get more screen world units.
    this.x = target.x - this.width / 2 / this.zoom;
    this.y = target.y - this.height / 2 / this.zoom;
  }
}

export default Camera;
