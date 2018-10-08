var lamb;
var sky;
var airplane;
var cartoon;
var city;
var city2;
var offset = 0;
var easing = 0.05;

function preload() {
  lamb = loadImage('Lamb.jpg');
  sky = loadImage('Sky.jpg');
  cartoon = loadImage('Cartoon.png');
  city = loadImage('City.png');
  city2 = loadImage('City2.png');
}


function setup() {
  createCanvas(600, 500);
  // background(204);
}

function draw() {
  image(sky, 0, 0, 600, 300);
  image(city, 0, 300, 600, 200)
  // image(city2, 0, 300, 600, 200)



  var dx= (mouseX-150)-offset;
  offset += dx*easing;
  image(cartoon, offset, 120, 300, 150);





  fill(255);
strokeWeight(4);
beginShape();
vertex(400, 120);
vertex(410, 160);
vertex(360, 90);
vertex(270, 80);
vertex(340, 70);
vertex(260, 50);
vertex(420, 10);
vertex(400, 50);
vertex(440, 100);
vertex(390, 50);
vertex(410, 90);
vertex(410, 100);
vertex(460, 120);
endShape();
fill(255, 36, 220);
  ellipse(345, 50, 12, 12);
  fill(255, 36, 220);
  ellipse(365, 50, 15, 15);
  fill(255, 36, 220);


}
