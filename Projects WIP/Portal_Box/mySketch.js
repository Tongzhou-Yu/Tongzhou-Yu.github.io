let vmin, vmax;
let tex, texSize = 512;
let gl, glsl;
let mx, my, me = 0.015;

function preload() {
  glsl = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  gl = drawingContext;
  vmin = (width < height) ? width : height;
  vmax = (width > height) ? width : height;
  mx = width / 2;
  my = height / 2;
  tex = createGraphics(texSize, texSize);
}

function container(size) {
  let s = size * sqrt(2);
  let r = s / 2;
  let h = size;
  push();
  {
    rotateX(-PI / 2);
    rotateY(PI / 4);
    cylinder(r, h, 5, 1, false);
  }
  pop();
}

function outsideBox(size) {
  gl.colorMask(false, false, false, false);
  container(size);
}

function insideBox(size) {
  gl.colorMask(true, true, true, true);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  container(size);
  gl.disable(gl.CULL_FACE);
}

function portalBox(size) {
  outsideBox(size + 1);
  insideBox(size);
}

function portal(size, sec) {
  portalBox(size);

  push();
  {
    rotateY(sec * -0.5);
    push();
    {
      rotateX(PI * 0.25);
      rotateY(PI * 0.25);
      box(size * 0.3);
    }
    pop();
  }
  pop();
}

function draw() {
  let sec = millis() / 1000;
  let size = vmin / 2;
  mx += (mouseX - mx) * me;
  my += (mouseY - my) * me;
  let rx = PI * map(my, 0, height, -0.5, 0.5);
  let ry = PI * map(mx, 0, width, 0.5, -0.5);
  
  background(30);
  
  rotateX(rx);
  rotateY(ry);
  
  noStroke();
  
  shader(glsl);
  
  push();
  {
    translate(0, 0, -size);
    portal(size, sec);
  }
  pop();
  
  push();
  {
    translate(0, size, 0);
    rotateX(PI * 0.5);
    
    portal(size, sec);
  }
  pop();
}