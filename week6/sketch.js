var x = 60;
var y = 60;

function setup() {
  createCanvas(400, 120);
}

function draw() {
  background(0);
  fill(255);
  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      x = x - 5;
    }  else if(keyCode == RIGHT_ARROW) {
      x = x + 5;
    }
    if(keyCode == UP_ARROW) {
      y = y - 5;
    }
    if(keyCode == DOWN_ARROW) {
      y = y + 5;
    }
    if(key == 'd') {
      stroke(250, 255, 0);
      line (x + 10, y + 5, width, y + 5);
  }
}
  noStroke();
  rect(x, y, 10, 10);
}
