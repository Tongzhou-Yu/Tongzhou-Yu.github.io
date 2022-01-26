//p5.js shader basic structure ref from https://www.openprocessing.org/sketch/920144
let colors = "132a13-31572c-4f772d-90a955-ecf39e-f4b860-c83e4d".split("-").map(a => "#" + a)
let chord = "C2,Eb2,G2,C3,Eb3,G3,C4,Eb4,G4,C5,Eb5,G5".split(",")
// let chordSet = "A,E,A,E,G#".split(";").map(a=>a.split(","))
let polySynth
let theShader;

let webglgraphics, graphics, graphics2;
function playSynth(note='A3',dur) {
  userStartAudio();
  let vel = random(0.2);
  polySynth.play(note, vel, 0, dur); 
}
function preload() {
	theShader = new p5.Shader(this.renderer, vert, frag)
}

function setup() {
	createCanvas(1000, 1000);
	pixelDensity(2)
	webglgraphics = createGraphics(1000, 1000, WEBGL);
	graphics = createGraphics(width, height)
	graphics2 = createGraphics(width, height)
  polySynth = new p5.PolySynth();
	polySynth.setADSR(1,1,1,1)
	noStroke()
	background(0);
 	useChord = chord 
	chord = [2,3,4,5].map(n=>useChord.map(note=>note+n)).flat().filter(a=>a)
}

let autoMovemouse = true

function mouseMoved() {
	autoMovemouse = false
}
let notePlayCount = 0 

function draw() {
	if (autoMovemouse) {
		mouseX = sin(frameCount / 30) * width
		mouseY = cos(frameCount / 40 + PI / 4) * height
	}
	if (frameCount%100==1){
			let targetNode1 = chord[int(random(0,chord.length/2))]
			let targetNode2 = chord[int(random(chord.length/2,chord.length))]
			playSynth(targetNode1,random(5))
			playSynth(targetNode2,random(5))
			notePlayCount+=2
		}
	webglgraphics.shader(theShader)
	theShader.setUniform('u_resolution', [width / 1000, height / 1000])
	theShader.setUniform('u_time', millis() / 1000)
	theShader.setUniform('u_mouse', [mouseX / width, mouseY / height])
	theShader.setUniform('u_original_tex', graphics);
	webglgraphics.rect(0, 0, width, height)

	graphics.background(0, 100)
	graphics.noStroke()
	graphics.push()

	image(webglgraphics, 0, 0)
	image(graphics2, 0, 0)


	stroke(255)
}

function keyPressed() {
	if (key == ' ') {
		save()
	}
}