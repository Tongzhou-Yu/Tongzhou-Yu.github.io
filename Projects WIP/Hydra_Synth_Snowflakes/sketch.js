new p5();

function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

/* CUSTOM FUNCTIONS FOR P5LIVE */
// keep fullscreen if window resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
	return oVal += (iVal - oVal) * eVal;
}

// processing compatibility
function println(msg){
	print(msg);
}


let libs = ['./hydra-synth']
const c = document.createElement('canvas')
c.width = window.innerWidth
c.height = window.innerHeight
document.body.appendChild(c)
let hydra = new Hydra ({detectAudio: false, canvas:c})
let pg;

//hydra
osc(40,0.1,0.6)
  .modulateScale(osc(40,0,1).kaleid(6))
  .repeat(2,6)
  .modulate(o0,0.03)
  .rotate(0, 0.1)
  .kaleid(6)
  //.modulateKaleid(shape(10,0.1,1))
  .out(o0)
// / hydra - end

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	pg = createGraphics(1000,1000)
	s0.init({ src:drawingContext.canvas })
	background(0)
}

function draw() {
	clear()
	pg.drawingContext.drawImage(c, 0, 0, pg.width, pg.height)
	texture(pg)
	plane(pg.width - 100, pg.height - 100);
}

document.addEventListener("keyup", (event) => {
  if (event.key === "s" || event.key === "S") {
      event.preventDefault();
      screencap();
  }
})
