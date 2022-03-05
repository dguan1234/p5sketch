let vol;
let mouseLocationLeft
let mouseLocationRight
let ellipseY=0
let ellipseZ=0
let ellipseX=0
let fr=60
let blackHole1=[];

function setup() {
  createCanvas(400,400)
  angleMode(DEGREES);
mic = new p5.AudioIn();
mic.start();
  frameRate(30);
  textSize(30);
  textAlign(CENTER);
  
  for(let i = 0; i < 4; i++){
let x = random(width*0.075, width*0.925)
let y = random(height*0.075, height*0.925)
  blackHole1[i]= new blackHole(x,y)
  } 
}









let r=54,g=168,b=50
function draw () {
background(255,150,40)
fill(22,255,18);
noStroke();
  
 for(let i = 0; i < 4; i++){
  blackHole1[i].display();
  blackHole1[i].move(this.t)
 }
 // console.log(blackHole1[1])
movingBG()
cape()
body()
head()
armsTop()
armLeft()
armRight()
legs()
eyes()
core()
capeTips()
vol=map(mic.getLevel(),0,0.1,0,50);
  


  
  frameRate(fr)
  ellipseY = ellipseY - 5 * (deltaTime / 50);
  if (ellipseY >= height) {
    if (fr === 60) {
      fr = 10;
      frameRate(fr);
    } else {
      fr = 60;
      frameRate(fr);
    }
    ellipseY = height;
  }
  if (ellipseY < 0){
    ellipseY = height;
  }
  
    frameRate(fr)
  ellipseZ = ellipseZ + 5 * (deltaTime / 50);
  if (ellipseZ >= height) {
    if (fr === 60) {
      fr = 10;
      frameRate(fr);
    } else {
      fr = 60;
      frameRate(fr);
    }
    ellipseZ = 0;
  }
  
  
  
  //left side area
  if(mouseX>width*0.1 && mouseX<width*0.25){
    if(mouseY>height*0.3375 && mouseY<height*0.575){
    mouseLocationLeft = 1;
  }else{
    mouseLocationLeft = 0;
  }
  }else{
    mouseLocationLeft = 0;
  }

   //right side area
  if(mouseX>width*0.75 && mouseX<width*0.9){
    if(mouseY>height*0.1375 && mouseY<height*0.375){
    mouseLocationRight = 1;
  }else{
    mouseLocationRight = 0;
  }
  }else{
    mouseLocationRight = 0;
  }

}

function head() {
//draw head bottom rectangle
push()
fill(r,g,b)
rect(width*0.4375, height*0.225, width*0.125, height*0.1);
pop()
  
//draw top head triange
triangle(width*0.425,height*0.1875,width*0.5, height*0.05, width*0.575,height*0.1875)
  
//draw head bottom triangle
triangle(width*0.425, height*0.25, width*0.5, height*0.075, width*0.575, height*0.25);
}

function body () {
//draw torso top
push()
fill(r,g,b)
ellipse(width*0.5, height*0.35, width*0.375, width*0.15);

//draw torso bottom
quad(width*0.35, height*0.35, width* 0.65, height*0.35,width*0.575,height*0.575, width*0.425, height*0.575)
pop()
}

function armsTop () {
//draw left arm top
push()
fill(r,g,b)
ellipse(width*0.275, height*0.35, width*0.25,width*0.125); 
pop()

//draw right arm top
push()
fill(r,g,b)
ellipse(width*0.725, height*0.35, width*0.25, width*0.125);
pop()
}

function armLeft(){
if(mouseLocationLeft==0){
//down
ellipse(width*0.175, height*0.45, width*0.125, height*0.225);
}else{(mouseLocationLeft==1)
 //up 
ellipse(width*0.175,height*0.25,width*0.125,width*0.225)
}
}


function armRight(){
if(mouseLocationRight==0){
//up
ellipse(width*0.825, height*0.25, width*0.125, height*0.225);
}else{(mouseLocationRight==1)
//down
ellipse(width*0.825, height*0.45, width*0.125, height*0.225);
}
}
  
  


function legs () {
//draw left leg bottom
ellipse(width*0.425, height*0.825, width*0.125, height*0.25);
  
//draw left leg top
push()
fill(r,g,b)
ellipse(width*0.425, height*0.6375, width*0.125, height*0.25);
pop()

//draw right leg bottom
ellipse(width*0.575, height*0.825, width*0.125, height*0.25); 

//draw right leg top
push()
fill(r,g,b)
ellipse(width*0.575, height*0.6375, width*0.125, height*0.25);
pop()
}

function eyes () {
push()
stroke(51)
fill(vol*15,vol*15,0);

//left eye
triangle(width*0.475, height*0.15, width*0.4625, height*0.125, width*0.4875, height*0.125);

//right eye
triangle(width*0.525, height*0.15, width*0.5125, height*0.125, width*0.5375, height*0.125);

//bottom eye
triangle(width*0.5, height*0.15, width*0.4875, height*0.175, width*0.5125, height*0.175);
pop()
push()
fill(255,255,255)
ellipse(width*0.5,height*0.2125,width*0.125,vol/5)
pop()
}

function core() {
push()
fill(255,vol*5,70);
beginShape();
//tl
vertex(width*0.475, height*0.35);
//tr
vertex(width*0.525, height*0.35);
//rr
vertex(width*0.55, height*0.3875);
//br
vertex(width*0.525, height*0.425);
//bl
vertex(width*0.475, height*0.425);
//ll
vertex(width*0.45, height*0.3875);
endShape();
pop()
}
  
function capeTips(){
push()
//cape tips
fill(171, 189, 255)
triangle(width*0.4,height*0.2875,width*0.4375,height*0.275,width*0.425,height*0.3125)
triangle(width*0.6,height*0.2875,width*0.5625,height*0.275,width*0.575,height*0.3125)
pop()
}
  
function cape(){
push()
//cape
fill(171, 189, 255)   
quad(width*0.4,height*0.3,width*0.6,height*0.3,width*0.75,height*0.75,width*0.25,height*0.75)
pop()
}

function movingBG(){
push()
//falling bg
fill(0, 98, 255)
//1 speed
ellipse(width/2, ellipseY, width*2.5,height*0.125)
ellipse(ellipseY,height/2, width*0.125,height*2.5)  
//5 speed 
ellipse(width/2, ellipseZ, width*2.5,height*0.125)  
ellipse(ellipseZ, height/2, width*0.125,height*2.5)    
//10 speed
//ellipse(width/2,ellipseX, width*2.5,height*0.125)
//ellipse(ellipseX ,height/2 ,width*0.125,height*2.5)
pop()
}


  


  class blackHole{
    constructor(xpos,ypos){
    this.xpos = xpos
    this.ypos = ypos
    this.direction = int(random(360));
    this.rotation = random(-1,1);
  }
  display() {
  push()
  translate(this.xpos,this.ypos)
  rotate(this.direction)
  fill(25,25,25)
  ellipse(50,50,50,30)
  fill(93, 5, 255)
  ellipse(50,50,30,30)
  fill(255,255,255)
  ellipse(50,50,20,20)
  pop()
    }
    move() {
      this.direction = this.direction + this.rotation
    }
}
  

  

