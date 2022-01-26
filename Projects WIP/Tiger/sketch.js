var a = hash.substr(2,2);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  console.log(hash);
  console.log(a);
}

function getMin(num1,num2){return num1<num2?num1:num2;}

function draw() {
  let Posture =1;
  //情绪：250~350,特殊320
  let Emotion = 320;

  let tSize = getMin(windowWidth,windowHeight);

  let headPatternAcount = 3;
  let bodyPatternAcount = 6;
  let tailPatternAcount = 10;
  tigerNormalColor = color(243,183,0);
  tigerSpecialColor = color(50,50,50);

  tigerColor = tigerNormalColor;
  if(Posture==1){
  createBody(750, bodyPatternAcount);
  createTailDown(250, 750, tailPatternAcount);
  createHead(250, 250, 87.37, Emotion, headPatternAcount);
  }
  if(Posture==2){
  createBody(750, bodyPatternAcount);
  createTailUp(250, 250, tailPatternAcount);
  Adjust(220,500,0)
  createHead(250, 250, 87.37, Emotion, headPatternAcount);
  pop()
  }
  if(Posture==3){
  Adjust(-1000,0,-HALF_PI)
  createBody(750, bodyPatternAcount);
  createTailUp(250, 250, tailPatternAcount);
  pop()
  Adjust(250,500,0)
  createHead(500, 250, 87.37, Emotion, headPatternAcount);
  pop()
  }
  if(Posture==4){
  Adjust(-1000,0,-HALF_PI)
  createBody(750, bodyPatternAcount);
  pop()
  Adjust(-1000,500,-HALF_PI)
  createTailDown(250, 250, tailPatternAcount);
  pop()
  Adjust(0,500,0)
  createHead(250, 250, 87.37, Emotion, headPatternAcount);
  pop()
  }
  if(Posture==5){
    Adjust(-1000,-1000,PI)
    createBody(750, bodyPatternAcount);
    pop()
    Adjust(-1000,-1000,PI)
    createTailUp(250, 250, tailPatternAcount);
    pop()
    Adjust(500,0,0)
    createHead(250, 250, 87.37, Emotion, headPatternAcount);
    pop()
  }
  if(Posture==6){
        Adjust(-1000,-1000,PI)
    createBody(750, bodyPatternAcount);
    pop()
        Adjust(-1000,-500,PI)
    createTailDown(250, 250, tailPatternAcount);
    pop()
        Adjust(280,500,0)
    createHead(250, 250, 87.37, Emotion, headPatternAcount);
    pop()
  }
}
function createHead(headCenterX, headCenterY, eyeSize, Emotion, headPatternAcount) {
  let headCorrectionX = headCenterX - 250;
  let headCorrectionY = headCenterY - 250;
  //耳
  fill(tigerColor);
  stroke("#000000");
  strokeWeight(60);
  rect(headCorrectionX, headCorrectionY, 500, 250);
  //脸
  circle(headCenterX, headCenterY, 500);
  //人中
  noFill();
  stroke("#000000");
  strokeWeight(30);
  line(headCenterX, headCenterY + 250, headCenterX, headCenterY + 163);
  //额纹
  strokeCap(ROUND);
  noFill();
  stroke("#000000");
  strokeWeight(30);
  for (let i = 0; i < headPatternAcount; i++) {
    arc(
      headCenterX,
      headCenterY,
      500 / (headPatternAcount + 1) + (500 / (headPatternAcount + 1)) * i,
      500 / (headPatternAcount + 1) + (500 / (headPatternAcount + 1)) * i,
      PI + QUARTER_PI,
      TWO_PI - QUARTER_PI
    );
  }
  line(headCenterX, headCenterY - 250, headCenterX, headCenterY);
  //左眼
  beginShape();
  vertex(eyeSize + headCorrectionX, Emotion + headCorrectionY);
  vertex(195.57 + headCorrectionX, 321.67 + headCorrectionY);
  vertex(195.57 + headCorrectionX, 403.29 + headCorrectionY);
  bezierVertex(
    195.57 + headCorrectionX,
    403.29 + headCorrectionY,
    223.01 + headCorrectionX,
    412.64 + headCorrectionY,
    250.01 + headCorrectionX,
    412.64 + headCorrectionY
  );
  endShape();
  //右眼
  beginShape();
  vertex(500 - eyeSize + headCorrectionX, Emotion + headCorrectionY);
  vertex(304.43 + headCorrectionX, 321.67+ headCorrectionY);
  vertex(304.43 + headCorrectionX, 403.29+ headCorrectionY);
  bezierVertex(
    304.43 + headCorrectionX,
    403.29 + headCorrectionY,
    276.99 + headCorrectionX,
    412.64 + headCorrectionY,
    249.99 + headCorrectionX,
    412.64 + headCorrectionY
  );
  endShape();
}
function createBody(bodyCenterX, bodyPatternAcount) {
  //身体颜色
  fill(tigerColor);
  noStroke();
  rect(500, 0, 250, 1000);
  rect(750, 250, 250, 500);
  //身体描边
  stroke("#000000");
  strokeWeight(60);
  strokeCap(SQUARE);
  line(500, 0, 750, 0);
  line(500, 0, 500, 1000);
  line(1000, 250, 1000, 750);
  line(500, 1000, 750, 1000);
  //花纹设定
  stroke("#000000");
  strokeWeight(60);
  strokeCap(SQUARE);
  //花纹右
  for (let i = 0; i < bodyPatternAcount; i++) {
    arc(
      bodyCenterX,
      250 + (750 / (bodyPatternAcount + 1)) * i,
      500,
      500,
      TWO_PI - HALF_PI,
      TWO_PI
    );
  }
  //花纹左
  for (let i = 0; i < bodyPatternAcount; i++) {
    arc(
      bodyCenterX,
      250 + 250 / bodyPatternAcount + (750 / (bodyPatternAcount + 1)) * i,
      500,
      500,
      PI,
      TWO_PI - HALF_PI
    );
  }
  //屁股
  arc(bodyCenterX, 750, 500, 500, 0, HALF_PI);
}
function createTailDown(tailCenterX, tailCenterY, tailPatternAcount) {
  //尾巴底色
  noFill();
  stroke(tigerColor);
  strokeWeight(100);
  arc(tailCenterX, tailCenterY, 350, 350, HALF_PI, TWO_PI);
  line(tailCenterX + 175, tailCenterY, tailCenterX + 175, tailCenterY + 150);
  //尾巴外轮廓
  noFill();
  stroke("#000000");
  strokeWeight(60);
  arc(tailCenterX, tailCenterY, 500, 500, HALF_PI, TWO_PI);
  arc(tailCenterX, tailCenterY, 200, 200, HALF_PI, TWO_PI);
  line(tailCenterX, tailCenterY + 250, 500, tailCenterY + 250);
  line(tailCenterX, tailCenterY + 100, 500, tailCenterY + 100);
  line(tailCenterX + 100, tailCenterY, tailCenterX + 100, tailCenterY + 100);
  line(500, tailCenterY, 500, tailCenterY + 100);
  //尾巴遮罩
  fill(tigerColor);
  noStroke();
  rect(tailCenterX,tailCenterY+130,250+31,90)
  //尾巴花纹
  noFill();
  strokeCap(ROUND);
  stroke("#000000");
  strokeWeight(30);
  for (let i = 0; i < tailPatternAcount/2; i++) {
    line(
      -sin(0 + QUARTER_PI * i) * 250 + tailCenterX,
      -cos(0 + QUARTER_PI * i) * 250 + tailCenterY,
      -sin(0 + QUARTER_PI * i - QUARTER_PI / 2) * 180 + tailCenterX,
      -cos(0 + QUARTER_PI * i - QUARTER_PI / 2) * 180 + tailCenterY
    );
  }
  for (let i = 0; i < tailPatternAcount/2; i++) {
    line(tailCenterX+(300/(tailPatternAcount/2-1))*i, tailCenterY+250, tailCenterX-65+(300/(tailPatternAcount/2-1))*i, tailCenterY+175);
  }
}
function createTailUp(tailCenterX, tailCenterY, tailPatternAcount) {
  //尾巴底色
  noFill();
  stroke(tigerColor);
  strokeWeight(100);
  arc(tailCenterX, tailCenterY, 350, 350, HALF_PI-HALF_PI, TWO_PI-HALF_PI);
  line(tailCenterX + 175, tailCenterY, tailCenterX + 175, tailCenterY - 150);
  //尾巴外轮廓
  noFill();
  stroke("#000000");
  strokeWeight(60);
  arc(tailCenterX, tailCenterY, 500, 500, HALF_PI-HALF_PI, TWO_PI-HALF_PI);
  arc(tailCenterX, tailCenterY, 200, 200, HALF_PI-HALF_PI, TWO_PI-HALF_PI);
  line(tailCenterX, tailCenterY - 250, 500, tailCenterY - 250);
  line(tailCenterX, tailCenterY - 100, 500, tailCenterY - 100);
  line(tailCenterX + 100, tailCenterY, tailCenterX + 100, tailCenterY - 100);
  line(500, tailCenterY, 500, tailCenterY - 100);
  //尾巴遮罩
  fill(tigerColor);
  noStroke();
  rect(tailCenterX,tailCenterY-130-90,250+31,90)
  //尾巴花纹
  noFill();
  strokeCap(ROUND);
  stroke("#000000");
  strokeWeight(30);
  for (let i = 0; i < tailPatternAcount/2; i++) {
    line(
      -sin(HALF_PI + QUARTER_PI * i) * 250 + tailCenterX,
      -cos(HALF_PI + QUARTER_PI * i) * 250 + tailCenterY,
      -sin(HALF_PI + QUARTER_PI * i + QUARTER_PI / 2) * 180 + tailCenterX,
      -cos(HALF_PI + QUARTER_PI * i + QUARTER_PI / 2) * 180 + tailCenterY
    );
  }
  for (let i = 0; i < tailPatternAcount/2; i++) {
    line(tailCenterX+(300/(tailPatternAcount/2-1))*i, tailCenterY-250, tailCenterX-65+(300/(tailPatternAcount/2-1))*i, tailCenterY-175);
  }
}
function Adjust(postionX,postionY,rotation){
  push()
  rotate(rotation);
  translate(postionX,postionY);
}
