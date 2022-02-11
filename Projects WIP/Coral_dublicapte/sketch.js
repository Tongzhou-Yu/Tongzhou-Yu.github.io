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
	//img.resize(myWindowSize,0);
	image(img,0,0);
}
