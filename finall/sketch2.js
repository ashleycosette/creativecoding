// image names
var bg;
var txt;
var tblblue;
var blue;
var plateb;
var napkinb;
var forkb;
var knifeb;
var milkb;
var spoonb;
var coffeeb;
var bfb;
var q1;
var q2;

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
  tblblue = loadImage('tblblue.png');

  blue = loadImage ('blue.png');

  plateb = loadImage ('plate.b.png');

  napkinb = loadImage ('napkin.b.png');

  forkb = loadImage ('fork.b.png');

  knifeb = loadImage ('knife.b.png');

  milkb = loadImage ('milk.b.png');

  spoonb = loadImage ('spoon.b.png');

  coffeeb = loadImage ('coffee.b.png');

  bfb = loadImage ('bf.b.png');

  q1 = loadImage ('q1.png');

  q2 = loadImage ('q2.png');
}


function setup() {
  createCanvas(1200, 800);
  image (blue, 0, 0, 1042, 625);
  image (plateb, 0, 0, 1042, 625);
  image (napkinb, 0, 0, 1042, 625);
  image (forkb, 0, 0, 1042, 625);
  image (knifeb, 0, 0, 1042, 625);
  image (milkb, 0, 0, 1042, 625);
  image (spoonb, 0, 0, 1042, 625);
  image (coffeeb, 0, 0, 1042, 625);
  image (bfb, 0, -60, 1042, 625);
  image (q1, 0, 0, 1042, 625);
  image (q2, 0, 0, 1042, 625);
  textSize (34);

}

function draw () {
  image (blue, 0, 0, 1042, 625);
    image (plateb, 0, 0, 1042, 625);
    image (napkinb, 0, 0, 1042, 625);
    image (forkb, 0, 0, 1042, 625);
    image (knifeb, 0, 0, 1042, 625);
    image (milkb, 0, 0, 1042, 625);
    image (spoonb, 0, 0, 1042, 625);
    image (coffeeb, 0, 0, 1042, 625);
    image (bfb, 0, -60, 1042, 625);
    image (q1, 0, 0, 1042, 625);
  //   image (q2, 0, 0, 1042, 625);
btn = createButton('Home Page');
  btn.position(10, 10);
  btn.mousePressed(homepage);

btn2 = createButton('Next Meal');
  btn2.position(800, 500);
  btn2.mousePressed(nextmeal);

btn3 = createButton('Back Button');
  btn3.position(10, 560);
  btn3.mousePressed(backbutton);

 if((mouseX>0) && (mouseX<1200) && (mouseY>0) && (mouseY<800) && mouseIsPressed) {
if ((mouseX < 751) && (mouseX > 710) && (mouseY < 392) && (mouseY > 141)){
    fill(0);
    text('WOOOHOOO',800,200,1000);
    fill(0);
    text('YAY',800,240,200);
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
window.location = "page3.html";
}

function backbutton() {
window.location = "page1.html";
}
