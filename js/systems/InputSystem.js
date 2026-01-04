class InputSystem {
  constructor() {
    this.keys = {
      left: false,
      right: false,
      jump: false,
      dash: false,
    };
    this.init();
  }

  init() {
    window.addEventListener("keydown", (e) => this.handle(e, true));
    window.addEventListener("keyup", (e) => this.handle(e, false));
    this.setUpTouchControls();
  }

  handle(e, isDown) {
    const code = e.code;
    if (["ArrowUp", "KeyW", "Space"].includes(code)) this.keys.jump = isDown;
    if (["ArrowLeft", "KeyA"].includes(code)) this.keys.left = isDown;
    if (["ArrowRight", "KeyD"].includes(code)) this.keys.right = isDown;
    if (["ShiftLeft", "ShiftRight", "KeyZ"].includes(code))
      this.keys.dash = isDown;
    e.preventDefault();
  }

  setUpTouchControls() {
    const bindBtn = (id, key) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        this.keys[key] = true;
      });
      btn.addEventListener("touchend", (e) => {
        e.preventDefault();
        this.keys[key] = false;
      });
    };

    bindBtn("btn-left", "left");
    bindBtn("btn-right", "right");
    bindBtn("btn-jump", "jump");
    bindBtn("btn-dash", "dash");
  }
}

export default InputSystem;
