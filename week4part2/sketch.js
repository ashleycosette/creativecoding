var x = 140;
var y = 60;
var d = 10;
var s = 280;

function setup() {
  createCanvas(480, 120);
  background(204);
  noFill();
}

function draw() {
  ellipse (x, y, d, d);
  ellipse (x, y, 2*d, 2*d);
  ellipse (x, y, 3*d, 3*d);
  ellipse (x, y, 4*d, 4*d);
  ellipse (x, y, 5*d, 5*d);
  ellipse (x, y, 6*d, 6*d);
  ellipse (s, y, d, d);
  ellipse (s, y, 2*d, 2*d);
  ellipse (s, y, 3*d, 3*d);
  ellipse (s, y, 4*d, 4*d);
  ellipse (s, y, 5*d, 5*d);
  ellipse (s, y, 6*d, 6*d);
// circles


}
