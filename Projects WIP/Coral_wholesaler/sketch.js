let img;

let baseDir = "assets";
let fileName = ["albert-williams","arnoldus-bloemers","daliana-pacuraru","flower-dark","glass-flowers","maria-van"];
let fileExt = ".jpg";
let fn;

function getMin(num1,num2){return num1>num2?num1:num2;}

function preload(){
let target = random(fileName);
fn = "./" + baseDir + "/" + target + fileExt;
img=loadImage(fn);
}
function setup() {
	myWindowSize = getMin(windowWidth,windowHeight);
	createCanvas(myWindowSize,myWindowSize*(img.height/img.width));
	img.resize(myWindowSize,0);
	//background(0);
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
	noFill();
	strokeWeight(2);
	stroke(red(col),green(col),blue(col),127);
		push();
	  translate(x,y);
		rotate(radians(angle*random(0.5,1)));
		if(red(col)>180){
		arc(0, 0, 10, 5, PI + QUARTER_PI, TWO_PI);
		}else{
		arc(0, 0, 40, 15, PI + QUARTER_PI, TWO_PI);
		//rectMode(CENTER);
	  //rect(0,0,3,15);
	}
		pop();
	}
}
