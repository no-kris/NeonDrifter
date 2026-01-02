class Camera {
  constructor(width, height, zoom = 1.0) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.zoom = zoom;
    this.recoilY = 0;
  }

  recoil(recoilY) {
    this.recoilY = recoilY;
  }

  update(target) {
    if (!target) return;
    // Formula: TargetPosition - (ScreenHalf / Zoom)
    // Dividing by zoom to get more screen world units.
    this.x = target.x - this.width / 2 / this.zoom;
    this.y = target.y - this.height / 2 / this.zoom;

    // Add tiny micro movement to the camera
    this.y += this.recoilY;
    this.recoilY *= 0.5;
    // Stop micro movement
    if (Math.abs(this.recoilY) < 0.1) this.recoilY = 0;
  }
}

export default Camera;
