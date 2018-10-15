var lamb;
var sky;
var airplane;
var cartoon;
var cartoon2;
var city;
var city2;
var bird;
var bird2;
var offset = 0;
var easing = 0.05;


var btn;
var count = 0;
var count= 120;
var whichPic = 1;


var x = 60;
var y = 60;


function preload() {
  lamb = loadImage('Lamb.jpg');
  sky = loadImage('Sky.jpg');
  cartoon = loadImage('Cartoon.png');
  city = loadImage('City.png');
  city2 = loadImage('City2.png');
  cartoon2 = loadImage('Cartoon2.png');
  bird = loadImage('Bird.png');
  bird2 = loadImage('Bird2.png');
}


function setup() {
  createCanvas(800, 700);
  // background(204);


  btn = createButton('Click Me!');
  btn.position(100, 50);
  btn.mousePressed(restart);

}

function draw() {
  image(sky, 0, 0, 800, 400);
  image(city, 0, 300, 800, 400)
  // image(city2, 0, 300, 600, 200)



  var dx= (mouseX-150)-offset;
  offset += dx*easing;
  if(whichPic == 1) {
    image(cartoon, offset, mouseY, 300, 150);
  } else {
    image(cartoon2, offset, mouseY, 250, 150);
  }






  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      x = x - 5;
      image(bird, x, 100, 100, 100);
    }  else if(keyCode == RIGHT_ARROW) {
      x = x + 5;
      image(bird, x, 100, 100, 100);
    }
    if(keyCode == UP_ARROW) {
      y = y - 5;
      image(bird2, 100, y, 100, 100);
    }

    if(keyCode == DOWN_ARROW) {
      y = y + 5;
      image(bird2, 100, y, 100, 100);
    }


    /*if(key == 'd') {
      stroke(250, 255, 0);
      line (x + 10, y + 5, width, y + 5);
  }*/
}
//   noStroke();
//   rect(x, y, 10, 10);
// }

}





/*function increaseCount() {
  count +=5;
}

function decreaseCount() {
  count -=5;
}*/

function restart() {
  if(whichPic == 1) {
    whichPic = 2;
  } else {
    whichPic = 1;
  }
}
