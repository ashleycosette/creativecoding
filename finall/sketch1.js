// image names

var tblyllw;

var yellow;

var platey;

var napkiny;

var forky;

var knifey;

var milky;

var spoony;

var coffeey;

var bfy;

var q3;


//other vars
var offset = 0;
var easing = 0.05;

var btn;
var btn2;
var count = 0;
var count= 120;
var whichPic = 1;

var x = 60;
var y = 60;



function preload() {
  tblyllw = loadImage('tblyllw.png');

  yellow = loadImage ('yellow.png');

  platey = loadImage ('plate.y.png');

  napkiny = loadImage ('napkin.y.png');

  forky = loadImage ('fork.y.png');

  knifey = loadImage ('knife.y.png');

  milky = loadImage ('milk.y.png');

  spoony = loadImage ('spoon.y.png');

  coffeey = loadImage ('coffee.y.png');

  bfy = loadImage ('bf.y.png');

  q3 = loadImage ('q3.png');

}


function setup() {
  createCanvas(1200, 800);
  image (yellow, 0, 0, 1042, 625);
  image (platey, 0, 0, 1042, 625);
  image (napkiny, 0, 0, 1042, 625);
  image (forky, 0, 0, 1042, 625);
  image (knifey, 0, 0, 1042, 625);
  image (milky, 0, 0, 1042, 625);
  image (spoony, 0, 0, 1042, 625);
  image (coffeey, 0, 0, 1042, 625);
  image (bfy, 0, -60, 1042, 625);
  image (q3, 0, 0, 1042, 625);
  textSize (34);


}

function draw () {

  image (yellow, 0, 0, 1042, 625);
    image (platey, 0, 0, 1042, 625);
    image (napkiny, 0, 0, 1042, 625);
    image (forky, 0, 0, 1042, 625);
    image (knifey, 0, 0, 1042, 625);
    image (milky, 0, 0, 1042, 625);
    image (spoony, 0, 0, 1042, 625);
    image (coffeey, 0, 0, 1042, 625);
    image (bfy, 0, -60, 1042, 625);
    image (q3, 0, 0, 1042, 625);
btn = createButton('Home Page');
  btn.position(10, 10);
  btn.mousePressed(homepage);


btn2 = createButton('Next Meal');
  btn2.position(800, 500);
  btn2.mousePressed(nextmeal);

if((mouseX>0) && (mouseX<1200) && (mouseY>0) && (mouseY<800) && mouseIsPressed) {
if ((mouseX < 940) && (mouseX > 787) && (mouseY < 250) && (mouseY > 70)){
    fill(0);
    text('WOOOHOOO',600,100,1000);
    fill(0);
    text('YAY',600,125,200);
 }
 else {
   fill(0);
   text('NOOO',800,200,1000);
   fill(0);
   text('TRY AGAIN',800,240,200);
 }
}





}

function homepage() {
 window.location = "index.html";
}

function nextmeal() {
window.location = "page2.html";
}
