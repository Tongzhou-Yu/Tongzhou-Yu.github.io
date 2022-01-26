var colors;
var bg;
var size;

var digitsSettings = {
  squares: [[[0,0], [0, 1, 0], [1, 1], [0, 0, 0], [1,1], [0, 1, 0], [0, 0]] /* 0 */,
            [[0,0], [0, 0, 0], [0, 1], [0, 0, 0], [0,1], [0, 0, 0], [0, 0]] /* 1 */,
            [[0,0], [0, 1, 0], [0, 1], [0, 1, 0], [1,0], [0, 1, 0], [0, 0]] /* 2 */,
            [[0,0], [0, 1, 0], [0, 1], [0, 1, 0], [0,1], [0, 1, 0], [0, 0]] /* 3 */,
            [[0,0], [0, 0, 0], [1, 1], [0, 1, 0], [0,1], [0, 0, 0], [0, 0]] /* 4 */,
            [[0,0], [0, 1, 0], [1, 0], [0, 1, 0], [0,1], [0, 1, 0], [0, 0]] /* 5 */,
            [[0,0], [0, 1, 0], [1, 0], [0, 1, 0], [1,1], [0, 1, 0], [0, 0]] /* 6 */,
            [[0,0], [0, 1, 0], [0, 1], [0, 0, 0], [0,1], [0, 0, 0], [0, 0]] /* 7 */,
            [[0,0], [0, 1, 0], [1, 1], [0, 1, 0], [1,1], [0, 1, 0], [0, 0]] /* 8 */,
            [[0,0], [0, 1, 0], [1, 1], [0, 1, 0], [0,1], [0, 1, 0], [0, 0]] /* 9 */,
            [[0], [0, 0], [0], [0, 0], [0], [0, 0], [0]] /* : */],
  circles: [[[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 0 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 0, 1, 0], [1, 1, 1], [0, 0, 1, 0], [1, 1, 1], [0, 0, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 1 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 2 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 3 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 4 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 5 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 6 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 1, 0], [1, 1, 1], [0, 0, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 7 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 8 */,
            [[0, 0, 0, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 1, 1, 0], [1, 1, 1], [0, 0, 0, 0]] /* 9 */,
            [[0, 0, 0], [1, 1], [0, 0, 0], [1, 1], [0, 1, 0], [1, 1], [0, 1, 0], [1, 1], [0, 0, 0] /* : */]]
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = floor(height/24);
  reset();
}

function reset() {
  let hue1 = random(360);
  let hue2 = hue1 + 100;

  colors = {
      hue1: hue1,
      hue2: hue2,
      saturation: 40,
      brightness: 50,
  }

  bg = {truchet: truchetBackground(size), gradient: gradient()};
}

function mousePressed() {
  reset();
}

function draw() {
  image(bg.gradient, 0, 0);
  image(bg.truchet, 0, 0);

  let y = (floor(height/size) - 14)*size;
  let x = (1 - y%2)*size - 2*size;
  circle(x, y, size);
  clock(size, x, y);
}


function digit(pg, idx, pos, size) {
  let dist = sqrt(sq(size) + sq(size));

  let c = digitsSettings.circles[idx];
  let s = digitsSettings.squares[idx];

  mask = createGraphics(c.length*dist, 5*dist);
  mask.colorMode(HSB, 360, 100, 100);
  mask.noStroke();

  mask.rectMode(CENTER);
  for (let j = 0; j < s.length; ++j) {
    for (let i = 0; i < s[j].length; ++i) {
      mask.push();
      if (s[j][i] == 0) mask.fill("black");
      else mask.fill(80);
      mask.translate(dist*(i + (j%2 == 0 ? 1.5 : 1)) , dist*(1 + 0.5*j));
      mask.rotate(PI/4);
      mask.rect(0, 0, size, size);
      mask.pop();
    }
  }

  for (let j = 0; j < c.length; ++j) {
    for (let i = 0; i < c[j].length; ++i) {
      if (c[j][i] === 0) mask.erase();
      else if (j%2 == 1 ) mask.fill("black");
      else mask.fill(80);
      mask.ellipse(dist*(i + (j%2 == 0 ? 0.5 : 1)) , 0.5*dist*(1 + j), size, size);
      mask.noErase();
    }
  }

  pg.image(mask, pos.x, pos.y);
}

function truchetBackground(size) {
  pg = createGraphics(width, height);
  pg.noStroke();

  let nX = ceil(width/size);
  let nY = ceil(height/size);

  for (let i = 0; i < nX; ++i) {
    for (let j = 0; j < nY; ++j) {
      if (random() > 0.5) pg.erase();
      else pg.fill("black");
      pg.rect(size*i, size*j, size, size);
      pg.noErase();
    }
  }

  for (let i = 0; i < nX + 1; ++i) {
    for (let j = 0; j < nY + 1; ++j) {
      if (i%2 == j%2) pg.erase();
      else pg.fill("black");
      pg.circle(size*i, size*j, size);
      pg.noErase();
    }
  }
  return pg;
}

function clock(size, x, y) {
  let dist = sqrt(sq(size) + sq(size));
  let pgSize = {width: 32*dist, height: 10*dist};
  let pg = createGraphics(pgSize.width, pgSize.height);
  let x0 = pgSize.width/2;

  // hour
  if (floor(hour()/10) != 0) digit(pg, floor(hour()/10), {x:x0, y:0}, size);
  digit(pg, hour()%10, {x:x0 + 2*dist, y:0}, size);
  // :
  digit(pg, 10, {x:x0 + 4*dist, y:0}, size);
  // minute
  digit(pg, floor(minute()/10), {x:x0 + 5*dist, y:0}, size);
  digit(pg, minute()%10, {x:x0 + 7*dist, y:0}, size);
  // :
  digit(pg, 10, {x:x0 + 9*dist, y:0}, size);
  // second
  digit(pg, floor(second()/10), {x:x0 + 10*dist, y:0}, size);
  digit(pg, second()%10, {x:x0 + 12*dist, y:0}, size);

  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(PI/4);
  image(pg, 0, 0);
  pop();
}

function gradient() {
  let pg = createGraphics(width, height);
  pg.colorMode(HSB, 360, 100, 100);
  for (let i = -height; i < width; i++) {
    let hue = lerp(colors.hue1, colors.hue2, i / (width+height));
    pg.stroke(hue%360, colors.saturation, colors.brightness);
    pg.line(i, 0, i+height, height);
  }
  return pg;
}
