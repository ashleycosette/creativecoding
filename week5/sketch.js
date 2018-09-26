function setup() {
  createCanvas(480, 120);
  background(204);
  noStroke();
}

function draw() {

  if(mouseIsPressed && mouseButton== LEFT && mouseX>90 && mouseX<150 && mouseY>30 && mouseY<90 ) {
    fill(255, 0, 0);
  } else {
    fill(255);
  }
rect(90, 30, 60, 60);

if(mouseIsPressed && mouseButton== LEFT && mouseY>30 && mouseY<90 && mouseX>330 && mouseX<390) {
  fill(0, 255, 0);
} else {
  fill(255);
}
rect(330, 30, 60, 60);

}












// if(mouseY<40) {
//   fill(255, 0, 0);
// }else if (mouseY <80){
//   fill(0, 0, 255);
// } else {
//   fill (0, 255, 0);
// }
//
// ellipse(mouseX, mouseY, 10, 10);
// }




// if(mouseIsPressed && mouseButton== LEFT) {
//   fill(255, 0, 0);
// } else (mouseY<40){
//   fill(255);
// }
// rect(90, 30, 60, 60);
//
// if() {
//   fill(0, 255, 0);
// } else {
//   fill(255);
// }
// rect(330, 30, 60, 60);
// }
// }



//   if(mouseX>90 && mouseX<150)
//     fill(255,0,0);
//   } else {
//     fill(255);
//   }
// rect(90, 30, 60, 60);
//
//   if(mouseY>50 && mouseY<125){
//     fill(0,255,0);
//   } else {
//     fill(255);
//   }
//   rect(330, 30, 60, 60);
// }
