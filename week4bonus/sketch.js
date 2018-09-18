var d = 10;
var y = 20;

function setup() {
  createCanvas(500, 200);
  background(204);
  noFill();
}

function draw() {
  for(var j = 1; j < 8; j +=1) {
  line(0, y*j, 500, y*j);
  for(var i = 1; i < 61; i+=2) {
    ellipse(d*i, y*j, d, d);
    //
    line(250, 100, d*i, y*j)
    // line(250, 100, 100, 0)
    // line(250, 100, 200, 0)
    // line(250, 100, 250, 0)
    // line(250, 100, 300, 0)
    // line(250, 100, 350, 0)
    // line(250, 100, 400, 0)
    // line(250, 100, 450, 0)
    // line(250, 100, 500, 0)
    // line(250, 100, 550, 0)
    // line(250, 100, 600, 0)
    // line(250, 100, -100, 0)
    // line(250, 100, -200, 0)
    // line(250, 100, -250, 0)
    // line(250, 100, -300, 0)
    // line(250, 100, -350, 0)
    // line(250, 100, -400, 0)
    // line(250, 100, -450, 0)
    // line(250, 100, -500, 0)
    // line(250, 100, -550, 0)
    // line(250, 100, -600, 0)

    }
  }
}

//
// for(var i = 20; i < 400; i +=20) {
//   line(i, 0, i + i/2, 80);
//   }




// function setup() {
//   createCanvas (480, 120);
//   background (204);
//   noFill ();
// }
//
// function draw() {
//
//   // Extra credit
//   for (var y = 20; y <= height-20; y += 10) {
//     for (var x = 20; x <= height-20; x += 10) {
//       ellipse (x, y, 4, 4);
//       line (x, y, 240, 100);
//     }
//   }
// }
