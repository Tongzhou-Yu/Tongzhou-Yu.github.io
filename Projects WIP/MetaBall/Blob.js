class Blob {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    let angle = random(0, 2 * PI);
    this.xspeed = random(2, 5) * Math.cos(angle);
    this.yspeed = random(2, 5) * Math.sin(angle);
    this.r = random(12, 24);
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width*0.8 || this.x < width*0.2) this.xspeed *= -1;
    if (this.y > height*0.8 || this.y <  height*0.2) this.yspeed *= -1;
  }

  show() {
		fill(255);
		noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}