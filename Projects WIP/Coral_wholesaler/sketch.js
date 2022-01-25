let img;

function preload(){
img=loadImage('./assets/lily-flower-cute.jpg');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	img.resize(width,height);
	background(0);
}

function draw() {
	for(let i =0;i<300;i++){
	let x = int(random(width));
	let y  =int(random(height));
	let col = img.get(x,y);
	let br = brightness(col);
  let sat = saturation(col);
	let h = hue(col);
	let w = map(br,0,255,5,200);
		let angle = map(h,0,255,0,90)
	noStroke();
	fill(red(col),green(col),blue(col),127);
		push();
	translate(x,y);
		rotate(radians(angle));
		if(red(col)>180){
		circle(0,0,15)
		}else{
		rectMode(CENTER);
	rect(0,0,3,15);}
		pop();
	}
}
