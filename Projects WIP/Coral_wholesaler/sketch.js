let flower;
let bird;
let img;

let baseDir = "assets";
let flowerName = ["albert-williams","arnoldus-bloemers","daliana-pacuraru","flower-dark","glass-flowers","maria-van"];
let fileExt = ".jpg";
let fn;
let bn;

function getMin(num1,num2){return num1<num2?num1:num2;}

function preload(){
	fn = "./" + baseDir + "/" + random(flowerName) + fileExt;
	flower = loadImage(fn);
	bn = "./" + baseDir + "/" + "bird" + ".png";
	bird = loadImage(bn);
}
function setup() {
	myWindowSize = getMin(windowWidth,windowHeight);
	createCanvas(myWindowSize,myWindowSize*(flower.height/flower.width));
	img = createGraphics(myWindowSize,myWindowSize*(flower.height/flower.width));
	img.background(0);
	flower.resize(myWindowSize,0);
	img.image(flower,0,0);
	bird.resize(myWindowSize/2,0);
	img.image(bird,myWindowSize/2-random(0,myWindowSize),myWindowSize/2-random(0,myWindowSize));
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
	}
		pop();
	}
}
