function getMin(num1,num2){return num1<num2?num1:num2;}

function setup() {

  // 定义Hash值-----------------------------------------------------------------
  let tigerhash = fxhash;//离线测试
  //let tigerhash = tokenData.hash;//正式版本
  // 定义Hash值-----------------------------------------------------------------

  let tSize = getMin(windowWidth,windowHeight);

  // 变量设置--------------------------------------------------------------------
  console.log("Hash：",tigerhash);
  let backgroundColor = color(tigerhash.substr(2,2),0,0);
  console.log("背景：",backgroundColor);
  let Posture = parseInt(tigerhash.substr(4,1), 16);
  console.log("姿态：",Posture);
  let Emotion = tSize/2/(500/(250+(100/(255/(parseInt(tigerhash.substr(5,2), 16))))));
  console.log("情绪：",Emotion,"250~350,特殊320");
  let headPatternAcount = Math.trunc(parseInt(tigerhash.substr(7,1), 16)/3)+1;
  console.log("额头花纹：",headPatternAcount);
  let bodyPatternAcount = Math.trunc(parseInt(tigerhash.substr(8,1), 16)/3)+3;
  console.log("身体花纹：",bodyPatternAcount);
  let tailPatternAcount = Math.trunc(parseInt(tigerhash.substr(9,1), 16)/3)+4;
  console.log("尾巴花纹：",tailPatternAcount);
  if(parseInt(tigerhash.substr(10,1), 16) >=0 && parseInt(tigerhash.substr(10,1), 16) <=10)
  {tigerColor = color(255,165,0);console.log("橙色")}
  if(parseInt(tigerhash.substr(10,1), 16) ==11)
  {tigerColor = color(255,215,0);console.log("金色")}
  if(parseInt(tigerhash.substr(10,1), 16) ==12)
  {tigerColor = color(205,133,63);console.log("秘鲁色")}
  if(parseInt(tigerhash.substr(10,1), 16) ==13)
  {tigerColor = color(210,105,30);console.log("巧克力色")}
  if(parseInt(tigerhash.substr(10,1), 16) ==14)
  {tigerColor = color(139,69,19);console.log("马鞍棕色")}
  if(parseInt(tigerhash.substr(10,1), 16) ==15)
  {tigerColor = color(160,82,45);console.log("赭色")}
  // 变量设置--------------------------------------------------------------------

  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  if(Posture>=0 && Posture<=3){
  createBody(windowWidth/2+tSize/4, bodyPatternAcount,tSize);
  createTailDown(windowWidth/2-tSize/4, windowHeight/2+tSize/4, tailPatternAcount,tSize);
  createHead(windowWidth/2-tSize/4, windowHeight/2-tSize/4, 87.37, Emotion, headPatternAcount,tSize);
}//原始位置
  if(Posture>=4 && Posture<=6){
  createBody(windowWidth/2+tSize/4, bodyPatternAcount,tSize);
  createTailUp(windowWidth/2-tSize/4, windowHeight/2-tSize/4, tailPatternAcount,tSize);
  Adjust(tSize/4-30*tSize/1000,tSize/2,0)
  createHead(windowWidth/2-tSize/4, windowHeight/2-tSize/4, 87.37, Emotion, headPatternAcount,tSize);
  pop()
  }
  if(Posture>=7 && Posture<=9){
  let postionX,postionY;
  if(windowWidth>=windowHeight){postionX=-(windowHeight+(windowWidth/2-tSize/2));postionY=windowWidth/2+tSize/2-tSize;}
  else{postionX=-(windowHeight/2+tSize/2);postionY=-(windowHeight/2-tSize/2);}
  Adjust(postionX,postionY,-HALF_PI)
  createBody(windowWidth/2+tSize/4, bodyPatternAcount,tSize);
  createTailUp(windowWidth/2-tSize/4, windowHeight/2-tSize/4, tailPatternAcount,tSize);
  pop()
  Adjust(tSize/4,tSize/2,0)
  createHead(windowWidth/2, windowHeight/2-tSize/4, 87.37, Emotion, headPatternAcount,tSize);
  pop()
  }
  if(Posture>=10 && Posture<=12){
    let postionX,postionY;
    if(windowWidth>=windowHeight){postionX=-(windowHeight+(windowWidth/2-tSize/2));postionY=windowWidth/2+tSize/2-tSize;}
    else{postionX=-(windowHeight/2+tSize/2);postionY=-(windowHeight/2-tSize/2);}
    Adjust(postionX,postionY,-HALF_PI)
  createBody(windowWidth/2+tSize/4, bodyPatternAcount,tSize);
  pop()
  if(windowWidth>=windowHeight){postionX=-(windowHeight+(windowWidth/2-tSize/2));postionY=windowWidth/2+tSize/2-tSize+tSize/2;}
  else{postionX=-(windowHeight/2+tSize/2);postionY=-(windowHeight/2-tSize/2)+tSize/2;}
  Adjust(postionX,postionY,-HALF_PI)
  createTailDown(windowWidth/2-tSize/4, windowHeight/2-tSize/4, tailPatternAcount,tSize);
  pop()
  Adjust(0,tSize/2,0)
  createHead(windowWidth/2-tSize/4, windowHeight/2-tSize/4, 87.37, Emotion, headPatternAcount,tSize);
  pop()
  }
  if(Posture>=13 && Posture<=15){
    Adjust(-windowWidth,-windowHeight,PI)
    createBody(windowWidth/2+tSize/4, bodyPatternAcount,tSize);
    pop()
    Adjust(-windowWidth,-windowHeight,PI)
    createTailUp(windowWidth/2-tSize/4, windowHeight/2-tSize/4, tailPatternAcount,tSize);
    pop()
    Adjust(tSize/2,0,0)
    createHead(windowWidth/2-tSize/4, windowHeight/2-tSize/4, 87.37, Emotion, headPatternAcount,tSize);
    pop()
  }
  if(Posture==16){
        Adjust(-windowWidth,-windowHeight,PI)
    createBody(windowWidth/2+tSize/4, bodyPatternAcount,tSize);
    pop()
        Adjust(-windowWidth,-(windowHeight-tSize/2),PI)
    createTailDown(windowWidth/2-tSize/4, windowHeight/2-tSize/4, tailPatternAcount,tSize);
    pop()
        Adjust(tSize/4+30*tSize/1000,tSize/2,0)
    createHead(windowWidth/2-tSize/4, windowHeight/2-tSize/4, 87.37, Emotion, headPatternAcount,tSize);
    pop()
  }
}
function createHead(headCenterX, headCenterY, eyeSize, Emotion, headPatternAcount, tSize) {
  let headCorrectionX = headCenterX - tSize/4;
  let headCorrectionY = headCenterY - tSize/4;
  //耳
  fill(tigerColor);
  stroke("#000000");
  strokeWeight(60*tSize/1000);
  rect(headCorrectionX, headCorrectionY, tSize/2, tSize/4);
  //脸
  circle(headCenterX, headCenterY, tSize/2);
  //人中
  noFill();
  stroke("#000000");
  strokeWeight(30*tSize/1000);
  line(headCenterX, headCenterY + tSize/4, headCenterX, headCenterY + tSize/(1000/163));
  //额纹
  strokeCap(ROUND);
  noFill();
  stroke("#000000");
  strokeWeight(30*tSize/1000);
  for (let i = 0; i < headPatternAcount; i++) {
    arc(
      headCenterX,
      headCenterY,
      tSize/2 / (headPatternAcount + 1) + (tSize/2 / (headPatternAcount + 1)) * i,
      tSize/2 / (headPatternAcount + 1) + (tSize/2 / (headPatternAcount + 1)) * i,
      PI + QUARTER_PI,
      TWO_PI - QUARTER_PI
    );
  }
  line(headCenterX, headCenterY - tSize/4, headCenterX, headCenterY);
  //左眼
  beginShape();
  vertex(tSize/2/(500/eyeSize) + headCorrectionX, Emotion + headCorrectionY);
  vertex(tSize/2/(500/195.57) + headCorrectionX, tSize/2/(500/321.67) + headCorrectionY);
  vertex(tSize/2/(500/195.57) + headCorrectionX, tSize/2/(500/403.29) + headCorrectionY);
  bezierVertex(
    tSize/2/(500/195.57) + headCorrectionX,
    tSize/2/(500/403.29) + headCorrectionY,
    tSize/2/(500/223.01) + headCorrectionX,
    tSize/2/(500/412.64) + headCorrectionY,
    tSize/2/(500/250.01) + headCorrectionX,
    tSize/2/(500/412.64) + headCorrectionY
  );
  endShape();
  //右眼
  beginShape();
  vertex(tSize/2 - tSize/2/(500/eyeSize) + headCorrectionX, Emotion + headCorrectionY);
  vertex(tSize/2/(500/304.43) + headCorrectionX, tSize/2/(500/321.67)+ headCorrectionY);
  vertex(tSize/2/(500/304.43) + headCorrectionX, tSize/2/(500/403.29)+ headCorrectionY);
  bezierVertex(
    tSize/2/(500/304.43) + headCorrectionX,
    tSize/2/(500/403.29) + headCorrectionY,
    tSize/2/(500/276.99) + headCorrectionX,
    tSize/2/(500/412.64) + headCorrectionY,
    tSize/2/(500/249.99) + headCorrectionX,
    tSize/2/(500/412.64) + headCorrectionY
  );
  endShape();
}
function createBody(bodyCenterX, bodyPatternAcount, tSize) {
  //身体颜色
  fill(tigerColor);
  noStroke();
  rect(windowWidth/2, windowHeight/2-tSize/2, tSize/4, tSize);
  rect(windowWidth/2+tSize/4, windowHeight/2-tSize/4, tSize/4, tSize/2);
  //身体描边
  stroke("#000000");
  strokeWeight(60*tSize/1000);
  strokeCap(SQUARE);
  line(windowWidth/2, windowHeight/2-tSize/2, windowWidth/2+tSize/4, windowHeight/2-tSize/2);//Body Up
  line(windowWidth/2, windowHeight/2-tSize/2, windowWidth/2, windowHeight/2+tSize/2);//Body Left
  line(windowWidth/2+tSize/2, windowHeight/2-tSize/4, windowWidth/2+tSize/2, windowHeight/2+tSize/4);//Body Right
  line(windowWidth/2, windowHeight/2+tSize/2, windowWidth/2+tSize/4, windowHeight/2+tSize/2);//Body Down
  //花纹设定
  stroke("#000000");
  strokeWeight(60*tSize/1000);
  strokeCap(SQUARE);
  //花纹右
  for (let i = 0; i < bodyPatternAcount; i++) {
    arc(
      bodyCenterX,
      windowHeight/2-tSize/4 + (tSize/2/ (bodyPatternAcount - 1)) * i,
      tSize/2,
      tSize/2,
      TWO_PI - HALF_PI,
      TWO_PI
    );
  }
  //花纹左
  for (let i = 0; i < bodyPatternAcount; i++) {
    arc(
      bodyCenterX,
      windowHeight/2-tSize/4+tSize/4/(bodyPatternAcount-1)+ (tSize/2/ (bodyPatternAcount - 1)) * i,
      tSize/2,
      tSize/2,
      PI,
      TWO_PI - HALF_PI
    );
  }
  //屁股
  arc(bodyCenterX, windowHeight/2+tSize/4, tSize/2, tSize/2, 0, HALF_PI);
}
function createTailDown(tailCenterX, tailCenterY, tailPatternAcount, tSize) {
  //尾巴底色
  noFill();
  stroke(tigerColor);
  strokeWeight(100*tSize/1000);
  arc(tailCenterX, tailCenterY, tSize/2/(500/350), tSize/2/(500/350), HALF_PI, TWO_PI);
  line(tailCenterX + tSize/2/(500/175), tailCenterY, tailCenterX + tSize/2/(500/175), tailCenterY + tSize/2/(500/150));
  //尾巴遮罩
  fill(tigerColor);
  noStroke();
  rect(tailCenterX,tailCenterY+tSize/2/(500/130),tSize/4+tSize/2/(500/40),tSize/2/(500/90));
  //尾巴外轮廓
  noFill();
  stroke("#000000");
  strokeWeight(60*tSize/1000);
  arc(tailCenterX, tailCenterY, tSize/2, tSize/2, HALF_PI, TWO_PI);
  arc(tailCenterX, tailCenterY, tSize/2/(500/200), tSize/2/(500/200), HALF_PI, TWO_PI);
  line(tailCenterX, tailCenterY + tSize/4, windowWidth/2, tailCenterY + tSize/4);
  line(tailCenterX, tailCenterY + tSize/2/(500/100), windowWidth/2, tailCenterY + tSize/2/(500/100));
  line(tailCenterX + tSize/2/(500/100), tailCenterY, tailCenterX + tSize/2/(500/100), tailCenterY + tSize/2/(500/100));
  line(windowWidth/2, tailCenterY, windowWidth/2, tailCenterY + tSize/2/(500/100));
  //尾巴花纹
  noFill();
  strokeCap(ROUND);
  stroke("#000000");
  strokeWeight(30*tSize/1000);
  for (let i = 0; i < tailPatternAcount/2; i++) {
    line(
      -sin(0 + QUARTER_PI * i) * tSize/4 + tailCenterX,
      -cos(0 + QUARTER_PI * i) * tSize/4 + tailCenterY,
      -sin(0 + QUARTER_PI * i - QUARTER_PI / 2) * tSize/2/(500/180) + tailCenterX,
      -cos(0 + QUARTER_PI * i - QUARTER_PI / 2) * tSize/2/(500/180) + tailCenterY
    );
  }
  for (let i = 0; i < tailPatternAcount/2; i++) {
    line(tailCenterX+(tSize/2/(500/300)/(tailPatternAcount/2-1))*i, tailCenterY+tSize/4, tailCenterX-tSize/2/(500/65)+(tSize/2/(500/300)/(tailPatternAcount/2-1))*i, tailCenterY+tSize/2/(500/175));
  }
}
function createTailUp(tailCenterX, tailCenterY, tailPatternAcount, tSize) {
  //尾巴底色
  noFill();
  stroke(tigerColor);
  strokeWeight(100*tSize/1000);
  arc(tailCenterX, tailCenterY, tSize/2/(500/350), tSize/2/(500/350), HALF_PI-HALF_PI, TWO_PI-HALF_PI);
  line(tailCenterX + tSize/2/(500/175), tailCenterY, tailCenterX + tSize/2/(500/175), tailCenterY - tSize/2/(500/150));
  //尾巴遮罩
  fill(tigerColor);
  noStroke();
  rect(tailCenterX,tailCenterY-(tSize/4-30*tSize/1000),tSize/2/(500/(250+31)),tSize/2/(500/90));
  //尾巴外轮廓
  noFill();
  stroke("#000000");
  strokeWeight(60*tSize/1000);
  arc(tailCenterX, tailCenterY, tSize/2, tSize/2, HALF_PI-HALF_PI, TWO_PI-HALF_PI);
  arc(tailCenterX, tailCenterY, tSize/2/(500/200), tSize/2/(500/200), HALF_PI-HALF_PI, TWO_PI-HALF_PI);
  line(tailCenterX, tailCenterY - tSize/4, windowWidth/2, tailCenterY - tSize/4);
  line(tailCenterX, tailCenterY - tSize/2/(500/100), windowWidth/2, tailCenterY - tSize/2/(500/100));
  line(tailCenterX + tSize/2/(500/100), tailCenterY, tailCenterX + tSize/2/(500/100), tailCenterY - tSize/2/(500/100));
  line(windowWidth/2, tailCenterY, windowWidth/2, tailCenterY - tSize/2/(500/100));
  //尾巴花纹
  noFill();
  strokeCap(ROUND);
  stroke("#000000");
  strokeWeight(30*tSize/1000);
  for (let i = 0; i < tailPatternAcount/2; i++) {
    line(
      -sin(HALF_PI + QUARTER_PI * i) * tSize/4 + tailCenterX,
      -cos(HALF_PI + QUARTER_PI * i) * tSize/4 + tailCenterY,
      -sin(HALF_PI + QUARTER_PI * i + QUARTER_PI / 2) * tSize/2/(500/180) + tailCenterX,
      -cos(HALF_PI + QUARTER_PI * i + QUARTER_PI / 2) * tSize/2/(500/180) + tailCenterY
    );
  }
  for (let i = 0; i < tailPatternAcount/2; i++) {
    line(tailCenterX+(tSize/2/(500/300)/(tailPatternAcount/2-1))*i, tailCenterY-tSize/4, tailCenterX-tSize/2/(500/65)+(tSize/2/(500/300)/(tailPatternAcount/2-1))*i, tailCenterY-tSize/2/(500/175));
  }
}
function Adjust(postionX,postionY,rotation){
  push()
  rotate(rotation);
  translate(postionX,postionY);
}
