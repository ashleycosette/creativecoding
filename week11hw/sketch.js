// function Smiley(initX, initY, size, colorR, colorG, colorB) {
//   this.x = initX;
//   this.y = initY;
//   this.size = size;
//   this.R = colorR;
//   this.G = colorG;
//   this.B = colorB;
//
//   // function Rectangle(initX, initY, size, )
//
//   this.smile= function() {
//     fill(this.R, this.G, this.B);
//     rect(this.x, this.y, this.size, this.size+this.size);
//     ellipse(this.x-this.size, this.y+this.size, 20, 70);
//     ellipse(this.x+this.size/2, this.y+this.size/2, 20, 20);
//     // line(this.x, this.y, this.size/2, this.size/2, 45, 135);
//   }
//   // this.smile2= function() {
//   //   fill(this.R, this.G, this.B);
//   //   rect(this.x, this.y, this.size, this.size+this.size);
//   //   ellipse(this.x-this.size, this.y+this.size, 20, 70);
//   //   ellipse(this.x+this.size/2, this.y+this.size/2, 20, 20);
//   //   // line(this.x, this.y, this.size/2, this.size/2, 45, 135);
//   // }
// }
//
// var smiley1;
// var smiley2;
// var smiley3;
// var smiley4;
// var smiley5;
// // var ellipse1;
//
// function setup() {
//   createCanvas (480, 240);
//   background(204);
//   angleMode(DEGREES);
//   smiley1 = new Smiley(70, 60, 80, 190, 190, 190);
//   smiley2 = new Smiley(160, 60, 70, 190, 190, 190);
//   smiley3 = new Smiley(240, 60, 60, 190, 190, 190);
//   smiley4 = new Smiley(320, 60, 50, 190, 190, 190);
//   smiley5 = new Smiley(400, 60, 40, 190, 190, 190);
//   // ellipse1= new Ellipse(400, 60, 116, 121, 117);
//
// }
//
//
//
//
//
//
// (25, 25, 50, 50);
//
// function draw() {
//   smiley1.smile();
//   smiley2.smile();
//   smiley3.smile();
//   smiley4.smile();
//   smiley5.smile();
//   // ellipse1.ellipse();
// }
//
//
//
//
//
//
//
//
//
//
//



function Moai(initX, initY, size){

  this.x = initX;
  this.y = initY;
  this.size = size;
  this.build = function(){
    fill(179, 179, 179);
    rect(this.x, this.y, 75, 125);
    fill(89, 89, 89);
    ellipse(this.x+20, this.y+50, 20, 70);
    ellipse(this.x+50, this.y+30, 20, 20);
    triangle(this.x+75, this.y+75, this.x+95, this.y+75, this.x+75, this.y+30);
    line(this.x+75, this.y+100, this.x+60, this.y+100);
  }
}

var field;
var Moai1;
var Moai2;
var Moai3;
var Moai4;
var Moai5;

function preload(){
  field = loadImage('Moai.jpg');
}

function setup(){
  createCanvas(700, 600);
  Moai1 = new Moai(50, 425);
  Moai2 = new Moai(175, 400);
  Moai3 = new Moai(300, 375);
  Moai4 = new Moai(425, 350);
  Moai5 = new Moai(550, 325);
}
//
function draw(){
  image(field, 0, 0, 1000, 700);
  Moai1.build();
  Moai2.build();
  Moai3.build();
  Moai4.build();
  Moai5.build();
}
