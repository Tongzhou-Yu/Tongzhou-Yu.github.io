let colors = "07ed94-390099-9e0059-ff0054-ff5400-ffbd00-473BF0-f37748-d56062-fff-0c0a3e-7b1e7a-b33f62-f3c677".split("-").map(a=>`#${a}`)
let robots = []
let overAllTexture
let overAllScale = 1.1
let c
	let img
class Robot{
	constructor(args){
		let def = {
			p: createVector(width/2,height/2),
			v: createVector(0,0),
			a: createVector(0,0),
			randomId: random(500),
			size: createVector(random(65,95),random(50,95)),
			antennaSize: createVector(random(5,20),random(5,30)),
			colors: [random(colors),
							 random(colors),
							 random(colors),
							 random(colors),
							 random(colors),
							 random(colors),
							 random(colors)],
			eyeSizes: createVector(
									random(10,20),
									random(10,20)),
			ang: random(-0.1,0.1),
			corner: random([0,0,5,20,50]),
			strokeWeight: random(4,8)
		}
		Object.assign(def,args)
		Object.assign(this,def)
	}
	draw(){
		mainGraphics.push()
			mainGraphics.translate(this.p.x,this.p.y)
			mainGraphics.scale(2)

			if (this.randomId%4==0){
				mainGraphics.shearX(PI/8)
			}else{
				mainGraphics.shearX(-PI/8)
			}
			mainGraphics.rotate(this.ang+sin(this.randomId+frameCount/(32+15*sin(this.randomId+frameCount/100))+this.p.x+this.p.y)/4)

			mainGraphics.rectMode(CENTER)
			mainGraphics.ellipseMode(CENTER)
			mainGraphics.fill(this.colors[0])
			mainGraphics.noStroke()
			mainGraphics.strokeWeight(this.strokeWeight/2)
			// stroke(this.colors[1])
		  // stroke(this.colors[3])
			if (this.colors[0]=="#0c0a3e"){
				mainGraphics.stroke(255)
			}
			mainGraphics.rect(0,0,this.size.x,this.size.y,this.corner)
			mainGraphics.noStroke()

			mainGraphics.stroke(this.colors[2])
			mainGraphics.strokeWeight(this.strokeWeight)
			mainGraphics.fill(0)
			mainGraphics.circle(-18,0,this.eyeSizes.x)

			mainGraphics.stroke(this.colors[5])
			mainGraphics.strokeWeight(this.strokeWeight/2)
			mainGraphics.circle(18,0,this.eyeSizes.x+sin(frameCount/50)*2)
			mainGraphics.noStroke()

			mainGraphics.fill(this.colors[2])

			mainGraphics.push()
				mainGraphics.fill(this.colors[4])
				mainGraphics.rotate(sin(frameCount/30)/6)
				mainGraphics.rect(18,-18+sin(frameCount/50+this.p.y-mouseX/20)*5,this.eyeSizes.x*1.5,6)
			mainGraphics.pop()
			mainGraphics.push()
				mainGraphics.fill(this.colors[6])
				mainGraphics.rotate(sin(frameCount/20+1)/5)
				mainGraphics.rect(-18,-18+sin(frameCount/20+mouseY/25+this.p.y)*5,this.eyeSizes.x,6)
			mainGraphics.pop()

			mainGraphics.fill(this.colors[3])
			mainGraphics.rect(-this.size.x/2-5,0,7,this.eyeSizes.y*3)

			mainGraphics.fill(this.colors[4])
			mainGraphics.rect(this.size.x/2+5,0,7,this.eyeSizes.x*3)

			mainGraphics.fill(this.colors[4])
			mainGraphics.rect(0,-this.size.y/2+sin(frameCount/20+0.5)*5,
				this.antennaSize.x,this.antennaSize.y)

			mainGraphics.fill(this.colors[5])
			mainGraphics.rect(0,this.size.y/8+sin(frameCount/20)*5,
					10,20)

			mainGraphics.push()
				mainGraphics.rotate(sin(frameCount/10+mouseX/20+mouseY/20)/5)
				mainGraphics.fill(this.colors[6])
				mainGraphics.rect(0,this.size.y/4,this.size.x/2,5,30)
			mainGraphics.pop()

		mainGraphics.pop()
	}
	update(){
		this.v.x+=sin(this.randomId)
	}
}

function addRobot(x,y){
	robots.push(new Robot({
		p: createVector(x,y)
	}))
}
let mainGraphics
function setup() {

	c = createCanvas(1000,1000);
	mainGraphics = createGraphics(1000,1000)
	background(100);
	fill(0)
	rect(0,0,width,height)

	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()

	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])))
		}
	}
	overAllTexture.updatePixels()

	let rowId = 0
	for(var x=100;x<width;x+=250){
		rowId++
		for(var y=100;y<height;y+=250){
			addRobot(x,y+(rowId%2==0?100:0))
		}
	}

	img = createGraphics(windowWidth, windowHeight);
}
function draw() {
	background(0)
	img.image(mainGraphics,0,0)
	mainGraphics.image(img,0,1)
	mainGraphics.fill(0,2)
	mainGraphics.rect(0,0,width,height)

// 	fill(0)
// 	rect(0,0,width,height)
	mainGraphics.push()
	robots.forEach(robot=>{
		robot.update()
		robot.draw()
	})
	mainGraphics.pop()
	image(mainGraphics,0,0)


	push()
		fill(255)
		textSize(50)
		text("95\n243.06",50,height-120)
		// text(mouseX,50,height-100)
		// text(mouseY,50,height-50)
	pop()

	push()
		textSize(width/4)
		fill(255)
		stroke(255)
		strokeWeight(5)
		textStyle(BOLD)
		text("AM",50,width/4)
	pop()

	beginShape()
	noFill()
	for(var i=0;i<220;i++){
		stroke(255)
		vertex(i+220,height-80 +(noise(i/50)+ cos(i/50+frameCount/10))*2*sin(i+frameCount/50)*(overAllScale-1)*50)
	}
	endShape()

	textSize(80)
	fill(255)
	textStyle(BOLD)
	text("HAMILY #AM",width-550,height-50)

	push()
	let signPoints = [[126.7180202224328,74.62338403438254],[125.71668153434713,73.62238102535545],[117.70597202966172,70.61937199827422],[112.69927858923334,69.61836898924713],[100.68321433220522,69.61836898924713],[91.67116613943413,71.62037500730129],[87.66581138709144,72.62137801632838],[69.64171500154927,79.62839907951795],[62.63234418494954,87.63642315173459],[57.62565074452115,96.64545023297832],[56.62431205643548,99.64845926005957],[57.62565074452115,108.6574863413033],[58.626989432606834,109.65848935033038],[69.64171500154927,113.6625013864387],[98.68053695603388,110.65949235935746],[112.69927858923334,105.65447731422206],[136.73140710328957,96.64545023297832],[166.77156774585984,79.62839907951795],[170.77692249820254,75.62438704340963],[173.78093856245957,73.62238102535545],[173.78093856245957,74.62338403438254],[169.77558381011687,78.62739607049086],[169.77558381011687,79.62839907951795],[168.7742451220312,81.63040509757211],[168.7742451220312,81.63040509757211],[169.77558381011687,80.62940208854502],[171.77826118628823,78.62739607049086],[177.7862933148023,76.6253900524367],[178.78763200288796,76.6253900524367],[183.79432544331632,81.63040509757211],[183.79432544331632,82.6314081065992],[185.7970028194877,84.63341412465336],[185.7970028194877,84.63341412465336],[202.81976051694417,79.62839907951795],[209.82913133354393,74.62338403438254],[210.8304700216296,74.62338403438254],[210.8304700216296,76.6253900524367],[209.82913133354393,78.62739607049086],[209.82913133354393,79.62839907951795],[226.8518890310004,79.62839907951795],[231.85858247142878,77.62639306146379],[236.86527591185717,72.62137801632838],[237.86661459994284,72.62137801632838],[237.86661459994284,72.62137801632838],[237.86661459994284,73.62238102535545],[241.87196935228556,73.62238102535545],[259.8960657378277,72.62137801632838],[260.8974044259134,71.62037500730129],[260.8974044259134,71.62037500730129],[261.89874311399905,72.62137801632838],[269.9094526186845,74.62338403438254],[275.91748474719856,74.62338403438254],[281.9255168757126,74.62338403438254],[310.9643388301972,68.61736598022006],[326.985757839568,64.61335394411172],[345.0098542251102,59.60833889897632],[366.0379666749094,54.60332385384092],[369.04198273916643,53.60232084481383],[371.04466011533776,51.60031482675967]]
		stroke(255)
		beginShape()
		noFill()
		translate(width/1.6,0)
	scale(0.9)
	rotate(0.05)
		for(let p of signPoints){
			curveVertex(p[0],p[1])
		}
		strokeWeight(2.5)
		endShape()
	pop()

	push()
		stroke(255)
		noFill()
		strokeWeight(5)
		rect(20,20,width-40,height-40)
	pop()

	push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
	pop()

	// push()
	// 	blendMode(MULTIPLY)
	// 	image(overAllTexture,0,0)
	// pop()
	// ellipse(mouseX, mouseY, 20, 20);
}
