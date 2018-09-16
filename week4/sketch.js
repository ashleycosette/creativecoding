// var x = 25;
// var h = 20;
// var y = 25;
// // stairs assignment
//
// function setup() {
//   createCanvas(1200, 400);
//   // stairs assignment
// }
//
//
// function draw() {
//   background(204);
//   x = 20;
//   rect(x, y, 100, h);
//   x = x + 100;
//   rect(x, y + h, 100, h);
//   x = x + 100;
//   rect(x, y + h*2, 100, h);
//   x = x + 100;
//   rect(x, y + h*3, 100, h);
//   x = x + 100;
//   rect(x, y + h*4, 100, h);
//   x = x + 100;
//   rect(x, y + h*5, 100, h);
//   x = x + 100;
//   rect(x, y + h*6, 100, h);
//   x = x + 100;
//   rect(x, y + h*7, 100, h);
//   x = x + 100;
//   rect(x, y + h*8, 100, h);
//   x = x + 100;
//   rect(x, y + h*9, 100, h);
//   x = x + 100;
//   rect(x, y + h*10, 100, h);
//   x = x + 100;
//   rect(x, y + h*11, 100, h);
//   x = x + 100;
//   rect(x, y + h*12, 100, h);
//   // stairs assignment
// }

var x = 240;
var y = 60;
var d = 10;

function setup() {
  createCanvas(800, 400);
  background(204);
  noFill();

}

function draw() {
  for(var i = 1; i < 7; i++) {
    ellipse(x, y, i*d, i*d);
  }
}
