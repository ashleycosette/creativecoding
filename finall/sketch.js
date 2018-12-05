// image names
var bg;
var txt;

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
  bg = loadImage('intro-bg.png');
  txt = loadImage('intro-txt.png');
}


function setup() {
  createCanvas(1200, 800);
  image (bg, 0, 0, 1042, 625);
  image (txt, 0, 0, 1042, 625);

}

function draw () {

  btn = createButton('Eggs & Toast');
  btn.position(300, 400);
  btn.mousePressed(eggsandtoast);



/* if(mouseIsPressed){
  image (tblblue, 0, 0, 800, 40);
}*/


}

function eggsandtoast() {
 window.location = "page1.html";
}
