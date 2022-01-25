
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB);
	noStroke()
}

function draw() {
	background(0,0.0005)
	translate(width/2,height/2)
	scale(2)
	// stroke(0)
	if (frameCount<500)
	for(var i=0;i<width/3;i+=10){
		for(var o=0;o<height/3;o+=10){
			push()
				rotate(i+o+frameCount*noise(i+o)/100)
				scale(noise(i*o+frameCount/50))
				fill( (noise((i+o*50)/500+frameCount/50)*300+200) % 360,100,100)
				ellipse(i,o,5/log(frameCount),5/log(frameCount))
			pop()
		}
	}
	// ellipse(mouseX, mouseY, 20, 20);
}
