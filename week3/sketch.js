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
  rect(x, y, s, s);
  rect(x+s+d, y, 2*s, 2*s);
  rect(x+s+d+2*s+d, y, 3*s, 3*s);
  // put drawing code here
}
