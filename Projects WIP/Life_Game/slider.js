class Slider {
	constructor(x, y, v, text) {
		this.x = x;
		this.y = y;
		this.v = v;
		this.text = text;
		this.r = 7;
		
		this.w = width - 2 * this.x - textWidth(this.text) - 10;
	}
	
	tick() {
		if (mouseIsPressed && Math.abs(mouseY - this.y) < this.r)
			this.v = constrain((mouseX - this.x) / this.w, 0, 1);
		
		stroke(100);
		line(this.x, this.y, this.x + this.w, this.y);
		stroke(255);
		fill(100);
		ellipse(this.x + this.v * this.w, this.y, 2 * this.r, 2 * this.r);
		
		fill(255);
		noStroke();
		textAlign(LEFT, CENTER);
		text(this.text, this.x + this.w + 10, this.y);
	}
}