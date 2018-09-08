// var x = 240;
// var y = 60;
// var d = 10;
// for circles examples

// var x = 80;
// var y = 40;
// var d = 70;
// var s = 20;

var x = 80;
var y = 40;
var d = 100;
var s = 20;

function setup() {
  createCanvas(800, 400);
  background(204);
  noFill();
  // put setup code here
}

function draw() {
  // var x = 240;
  // var y = 60;
  // x = 50;
  // ellipse(x, y, d, d);
  // ellipse(x, y, 3*d, 3*d);
  // ellipse(x, y, 9*d, 9*d);
// circles example

  rect(x, y, s, s);
  rect(x+s+d, y, 2*s, 2*s);
  rect(x+s+d+2*s+d, y, 3*s, 3*s);



  // put drawing code here
}
