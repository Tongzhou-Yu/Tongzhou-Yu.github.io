let img;
let myWindowSize;
let seed;

function getMin(num1,num2){return num1<num2?num1:num2;}

function preload(){
	myWindowSize = getMin(windowWidth,windowHeight);
	seed = random(-1,1);
}

//画板
function setup() {
	createCanvas(myWindowSize, myWindowSize);
  basicLayer();
}

//绘画
function draw() {
  effectlayer();
}

//风格化
function effectlayer(){
	for(let i =0;i<300;i++){
	let x = int(random(width));
	let y  =int(random(height));
	let col = img.get(x,y);
	let br = brightness(col);
  let sat = saturation(col);
	let h = hue(col);
	let w = map(br,0,255,5,200);
  let angle = map(h,0,255,0,90);
	//noFill();
	fill(red(col)+seed*10,green(col)+seed*10,blue(col)+seed*10,150)
	//strokeWeight(2);
	//stroke(red(col),green(col),blue(col),127);
		push();
	  translate(x,y);
		rotate(radians(angle*random(0.5,1)));
		if(red(col)>180){
		rect(0,0,2 ,2,1);
	}else{
		rect(0,0,4,4,2);
	}
		pop();
	}
}

//底稿
function basicLayer(){
	img = createGraphics(myWindowSize, myWindowSize);
	//img.createCanvas(myWindowSize,myWindowSize)
	img.background(255);
	img.background(240, 232, 213)
	img.fill(112, 176, 140, 150)
	img.noStroke();
	img.triangle(-150/500*myWindowSize*seed, -250/500*myWindowSize, 600/500*myWindowSize, 400/500*myWindowSize, 550/500*myWindowSize, 550/500*myWindowSize);
	img.fill(238, 195, 87, 150)
	img.triangle(650/500*myWindowSize, -100/500*myWindowSize*seed, -100/500*myWindowSize, 450/500*myWindowSize, -100/500*myWindowSize, 600/500*myWindowSize);
	img.noStroke();
	img.noFill();
	img.ellipse(250/500*myWindowSize, 250/500*myWindowSize, 400/500*myWindowSize, 400/500*myWindowSize);
	img.stroke(10,20,30);
	img.strokeWeight(15/500*myWindowSize);
	img.ellipse(250/500*myWindowSize+100*seed, 250/500*myWindowSize+100*seed, 380/500*myWindowSize, 380/500*myWindowSize);
	img.noStroke();
	img.fill(101, 101, 101);
	img.ellipse(230/500*myWindowSize+100*seed, 270/500*myWindowSize+100*seed, 120/500*myWindowSize, 120/500*myWindowSize);
	img.noStroke();
	img.fill(223, 62, 16, 150);
	img.ellipse(250/500*myWindowSize+100*seed, 190/500*myWindowSize+100*seed, 90/500*myWindowSize, 90/500*myWindowSize);

	img.stroke(1);
	img.strokeWeight(1/500*myWindowSize);
	img.fill(240, 159, 127, 180);
	img.ellipse(176/500*myWindowSize, 176/500*myWindowSize, 100/500*myWindowSize, 100/500*myWindowSize);

	img.stroke(2);
	img.strokeWeight(2/500*myWindowSize);
	img.fill(247, 92, 50, 180);
	img.ellipse(230/500*myWindowSize+100*seed, 250/500*myWindowSize+100*seed, 50/500*myWindowSize, 50/500*myWindowSize);
	img.fill(0, 0, 0);
	img.ellipse(230/500*myWindowSize, 250/500*myWindowSize, 10/500*myWindowSize, 10/500*myWindowSize);
img.stroke(2,2,2);
img.strokeWeight(2/500*myWindowSize);
img.line ( 350 /500*myWindowSize+100*seed, 150 /500*myWindowSize, 130/500*myWindowSize , 400/500*myWindowSize );
img.stroke(2,2,2);
img.strokeWeight(2/500*myWindowSize);
img.line ( 230/500*myWindowSize , 120/500*myWindowSize , 100/500*myWindowSize , 350/500*myWindowSize );
img.stroke(2,2,2);
img.strokeWeight(2/500*myWindowSize);
img.line ( 100/500*myWindowSize , 150/500*myWindowSize+100*seed , 400/500*myWindowSize , 200/500*myWindowSize );
img.stroke(2,2,2);
img.strokeWeight(2/500*myWindowSize);
img.line ( 80/500*myWindowSize+100*seed , 250/500*myWindowSize , 400/500*myWindowSize , 350/500*myWindowSize );
img.stroke(2,2,2);
img.strokeWeight(2/500*myWindowSize);
img.line ( 350 /500*myWindowSize, 180 /500*myWindowSize, 360/500*myWindowSize , 360/500*myWindowSize );
img.noStroke();
	img.fill(253, 224, 61,150);
	img.ellipse(330/500*myWindowSize+100*seed, 240/500*myWindowSize+100*seed, 98/500*myWindowSize, 98/500*myWindowSize);
	img.stroke(2);
img.strokeWeight(1/500*myWindowSize);
	img.fill(253, 224, 61,150);
	img.ellipse(300/500*myWindowSize, 300/500*myWindowSize, 80/500*myWindowSize, 80/500*myWindowSize);
	img.stroke(2);
img.strokeWeight(0.5/500*myWindowSize);
	img.fill(253, 224, 61,150);
	img.ellipse(190/500*myWindowSize+100*seed, 280/500*myWindowSize, 98/500*myWindowSize, 98/500*myWindowSize);
	img.stroke(2);
img.strokeWeight(0.5/500*myWindowSize);
	img.fill(77, 152, 123,150);
	img.ellipse(190/500*myWindowSize, 230/500*myWindowSize, 50/500*myWindowSize, 50/500*myWindowSize);
	img.noStroke();
	img.fill(169, 69, 170,150);
	img.ellipse(338/500*myWindowSize, 160/500*myWindowSize, 53/500*myWindowSize, 53/500*myWindowSize);
	img.noStroke();
	img.fill(0);
	img.ellipse(315/500*myWindowSize, 185/500*myWindowSize, 30/500*myWindowSize, 30/500*myWindowSize);
	img.noStroke();
	img.fill(0);
	img.ellipse(330/500*myWindowSize, 220/500*myWindowSize, 20/500*myWindowSize, 20/500*myWindowSize);
	img.stroke(2);
img.strokeWeight(0.5/500*myWindowSize);
	img.fill(37, 100, 147,170);
	img.ellipse(370/500*myWindowSize, 245/500*myWindowSize, 40/500*myWindowSize, 40/500*myWindowSize);noStroke();
	img.fill(0);
	img.ellipse(320/500*myWindowSize, 330/500*myWindowSize, 20/500*myWindowSize, 20/500*myWindowSize);
	img.stroke(2);
img.strokeWeight(1.5/500*myWindowSize);
	img.fill(226, 119, 93, 150);
	img.ellipse(380/500*myWindowSize, 355/500*myWindowSize, 18/500*myWindowSize, 18/500*myWindowSize);
	img.stroke(2);
img.strokeWeight(4/500*myWindowSize);
	img.fill(238, 78, 38, 180);
	img.ellipse(130/500*myWindowSize, 240/500*myWindowSize, 30/500*myWindowSize, 30/500*myWindowSize);
	//image(img,0,0);
}
