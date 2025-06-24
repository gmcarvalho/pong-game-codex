class Paddle {
  constructor(x, upKey, downKey, img) {
    this.x = x;
    this.y = height / 2;
    this.w = 20;
    this.h = 100;
    this.speed = 7;
    this.upKey = upKey;
    this.downKey = downKey;
    this.img = img;
  }

  update() {
    if (keyIsDown(this.upKey)) {
      this.y -= this.speed;
    } else if (keyIsDown(this.downKey)) {
      this.y += this.speed;
    }
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);
  }

  draw() {
    if (this.img) {
      image(this.img, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
    } else {
      rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
    }
  }
}
