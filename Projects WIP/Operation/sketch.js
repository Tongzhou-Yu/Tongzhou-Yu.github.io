var particles_a = [];
var particles_b = [];
var particles_c = [];
var angle_scale = 2.9;
var points = [];
var color, pX, nums, grid_resolution, square;
var x_grid_step;
var y_grid_step;

function getNum(value)
{
	var n;
	if (value < 0.1) n = 250;
	else if (value < 0.3) n = 5000;
	else n = 1000;
	nums = n;
	return nums;
}

function getRez(value)
{
	var n;
	if (value < 0.1) n = 3;
	else if (value < 0.3) n = 5;
	else if (value < 0.5) n = 8;
	else n = 5;
	grid_resolution = n;
	return grid_resolution;
}

function getColor(value)
{
	var n;
	if (value < 0.1)
	{
		colors = "e7e6f7,e3d0d8,aea3b0,827081,c6d2ed".split(",").map(a=>"#"+a);
		n = "Monochrome"
	} else if (value < 0.2)
	{
		colors = "90fcf9,63b4d1,7699d4,9448bc,480355".split(",").map(a=>"#"+a);
		n = "Purple Haze"
	} else if (value < 0.3)
	{
		colors = "a31621,fcf7f8,ced3dc,4e8098,90c2e7".split(",").map(a=>"#"+a);
		n = "Cybernetics"
	} else if (value < 0.3)
	{
		colors = "646e78,8d98a7,dcccbb,eab464,a7754d".split(",").map(a=>"#"+a);
		n = "Spice"
	} else if (value < 0.4)
	{
		colors = "004e64,00a5cf,9fffcb,25a18e,7ae582".split(",").map(a=>"#"+a);
		n = "BlueMint"
	} else if (value < 0.5)
	{
		colors = "b80c09,6b2b06,e5e7e6,b7b5b3,141301".split(",").map(a=>"#"+a);
		n = "Militant"
	} else if (value < 0.6)
	{
		colors = "ffffff,00171f,003459,007ea7,00a8e8".split(",").map(a=>"#"+a);
		n = "Blue Ice"
	} else if (value < 0.8)
	{
		colors = "bee6ce,bcffdb,8dffcd,68d89b,4f9d69".split(",").map(a=>"#"+a);
		n = "Spring"
	} else
	{
		colors = "2d3142,bfc0c0,ffffff,ef8354,4f5d75".split(",").map(a=>"#"+a);
		n = "Bay"
	}
	return n;
}

function setup(){
	if (windowWidth > windowHeight) square = windowHeight;
	else square = windowWidth;
  createCanvas(windowWidth, windowHeight);
	pX = square * 0.01;
	background(21);
	colorMode(HSB, 255);
	getRez(random());
	getNum(random());
	getColor(random());
  for(var i = 0; i < nums; i++){
    particles_a[i] = new Particle(random(0, width),random(0,height));
    particles_b[i] = new Particle(random(0, width),random(0,height));
    particles_c[i] = new Particle(random(0, width),random(0,height));
  }
  x_grid_step = width / grid_resolution;
  y_grid_step = height / grid_resolution;
  for(var i = 0; i < grid_resolution; i++){
    for(var j = 0; j < grid_resolution; j++){
      var idx = to_idx(i, j);
      points[idx] = [x_grid_step * (i + random(0, 1)), y_grid_step * (j + random(0, 1))]
    }
  }
}

function draw(){
  noStroke();
  smooth();
	blendMode(ADD);
    for(var i = 0; i < nums; i++){
    var radius = map(i,0,nums,pX * 0.05,pX * 0.3);
    var alpha = map(i,0,nums,0,50);
		var c = color(colors[i % 5]);
		c.setAlpha(alpha);
		fill(c);
    //fill(i/nums*255, 200, 255, alpha);
    particles_a[i].move();
    particles_a[i].display(radius);

    //fill(255 - i/nums*255, 200, 255, alpha);
    particles_b[i].move();
    particles_b[i].display(radius);

		fill(180,180,180,alpha);
    particles_c[i].move();
    particles_c[i].display(radius);
  }
}

function to_idx(x_idx, y_idx) {
  return x_idx + y_idx * grid_resolution;
}

function voronoi_noise(x, y) {
  var max_step = Math.max(x_grid_step, y_grid_step)
  var x_idx = Math.floor(y / x_grid_step);
  x_idx = Math.min(Math.max(0, x_idx), grid_resolution-1)
  var y_idx = Math.floor(y / y_grid_step);
  y_idx = Math.min(Math.max(0, y_idx), grid_resolution-1)
  var idx = to_idx(x_idx, y_idx);
  var min_dist = Math.hypot(points[idx][0] - x, points[idx][1] - y);
  var min_dist_idx = 0;
  var x_extent = Math.ceil(x_grid_step / max_step);
  var y_extent = Math.ceil(y_grid_step / max_step);
  for(var i = -x_extent; i <= x_extent; i++){
    for(var j = -y_extent; j <= y_extent; j++){
      var x1_idx = x_idx + i;
      var y1_idx = y_idx + j;
      if(x1_idx < 0 || x1_idx >= grid_resolution || y1_idx < 0 || y1_idx >= grid_resolution){
        continue;
      }
      idx = to_idx(x1_idx, y1_idx);
      var dist = Math.hypot(points[idx][0] - x, points[idx][1] - y);
      if(dist < min_dist){
        min_dist = dist;
        min_dist_idx = idx;
      }
    }
  }
  return min_dist;
}


function Particle(x, y){
  this.dir = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.pos = createVector(x, y);
  this.speed = random(1, 3);

  this.move = function(){
    var angle = voronoi_noise(this.pos.x, this.pos.y)*TWO_PI/angle_scale;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed);
    this.pos.add(this.vel);
  }

  this.display = function(r){
    ellipse(this.pos.x, this.pos.y, r, r);
  }
}
