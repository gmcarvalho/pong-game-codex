class Ball {
  constructor(img) {
    this.r = 20;
    this.resetDirection = 1; // right serves first
    this.img = img;
    this.reset();
  }

  reset(dir) {
    this.x = width / 2;
    this.y = height / 2;
    const angle = random(-0.3, 0.3);
    const speed = 6;
    const direction = dir !== undefined ? dir : this.resetDirection;
    this.vx = speed * (direction > 0 ? cos(angle) : -cos(angle));
    this.vy = speed * sin(angle);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.r < 0 || this.y + this.r > height) {
      this.vy *= -1;
    }
  }

  draw() {
    if (this.img) {
      image(this.img, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    } else {
      ellipse(this.x, this.y, this.r * 2);
    }
  }

  checkPaddle(p) {
    if (
      this.x - this.r < p.x + p.w / 2 &&
      this.x + this.r > p.x - p.w / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.y - this.r < p.y + p.h / 2
    ) {
      this.vx *= -1;
      this.x = p.x + (this.vx > 0 ? p.w / 2 + this.r : -p.w / 2 - this.r);
      return true;
    }
    return false;
  }

  outOfBounds() {
    if (this.x - this.r < 0) {
      return 'right';
    } else if (this.x + this.r > width) {
      return 'left';
    }
    return null;
  }
}
