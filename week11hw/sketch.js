function Creature(initX, initY, size){
  this.x = initX;
  this.y = initY;
  this.size = size;
  this.buildcreature = function(){
    fill(179, 179, 179);
    noStroke ();
    rect(this.x, this.y, this.size, this.size*2);
    fill(89, 89, 89);
    ellipse(this.x + this.size/4, this.y+ this.size, this.size/3, this.size*1.5);
    ellipse(this.x + this.size/1.5, this.y+this.size/3, this.size/4, this.size/4);
    triangle (this.x + this.size, this.y + this.size/3, this.x + this.size, this.y+this.size, this.x+this.size*1.2, this.y+this.size);
    stroke (0);
    line (this.x+this.size/2, this.y+this.size*1.5, this.x+this.size, this.y+this.size*1.5);
  }
}

var field;
var Creature1;
var Creature2;
var Creature3;
var Creature4;
var Creature5;

function preload() {
field = loadImage("Moai.jpg");
}

function setup(){
  createCanvas(828, 549);
  background (204);
  Creature1 = new Creature(70, 250, 145);
  Creature2 = new Creature(250, 250, 120);
  Creature3 = new Creature(400, 250, 95);
  Creature4 = new Creature(550, 250, 70);
  Creature5 = new Creature(650, 250, 50);
}

function draw(){
  image(field, 0, 0);
 Creature1.buildcreature();
  Creature2.buildcreature();
  Creature3.buildcreature();
  Creature4.buildcreature();
  Creature5.buildcreature();
}
