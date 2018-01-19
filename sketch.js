//center point
var centerX = 0.0, centerY = 0.0;

var radius = 340, rotAngle = -90;
var accelX = 0.0, accelY = 0.0;
var deltaX = 0.0, deltaY = 0.0;
var springing = 0.0003, damping = 0.91;

//corner nodes
var nodes = 5;

//zero fill arrays
var nodeStartX = [];
var nodeStartY = [];
var nodeX = [];
var nodeY = [];
var angle = [];
var frequency = [];

// soft-body dynamics
var organicConstant = 1.0;

var capture;



function setup() {
    
  var Canvas= createCanvas(windowWidth, windowHeight);
  Canvas.parent('sketchContainer');
  background(240, 240, 240,0);

//  capture = createCapture(VIDEO);
//  capture.size(0.6*windowWidth, 0.8*windowHeight);
//  capture.hide();
//  var constraints = {
//    audio: false,
//    video: {
//      facingMode: "user"
//    }
//  };
//  capture = createCapture(constraints);
    
    
    
    
  //center shape in window
  centerX = width/2;
  centerY = height/2;

  //initialize arrays to 0
  for (var i=0; i<nodes; i++){
    nodeStartX[i] = 0;
    nodeStartY[i] = 0;
    nodeY[i] = 0;
    nodeY[i] = 0;
    angle[i] = 0;
  }

  // iniitalize frequencies for corner nodes
  for (var i=0; i<nodes; i++){
    frequency[i] = random(3, 9);
  }

  noStroke();
  frameRate(30);   
}

    
function draw() {
//    
//  image(capture, windowWidth/2-0.3*windowWidth, windowHeight/2-0.4*windowHeight, 0.6*windowWidth, 0.8*windowHeight); 
  //fade background
  background(240, 240, 240, 100);
//  rect(0,0,width, height);
  drawShape();
  moveShape();
  
  drawShape2();
  moveShape2();  
    
  drawShape3();
  moveShape3();      
}


function drawShape() {    
    
  //  calculate node  starting locations
  for (var i=0; i<nodes; i++){
    nodeStartX[i] = centerX+cos(radians(rotAngle))*radius;
    nodeStartY[i] = centerY+sin(radians(rotAngle))*radius;
    rotAngle += 360.0/nodes;
  }

  // draw polygon
  curveTightness(organicConstant);
  //fill(random(0,20));
  fill(0,0,255);
  blendMode(MULTIPLY);
  beginShape();
  for (var i=0; i<nodes; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (var i=0; i<nodes-1; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  endShape(CLOSE);
}



function moveShape() {
  //move center point
//  deltaX = mouseX-centerX;
//  deltaY = mouseY-centerY;

  deltaX = centerX;
  deltaY = centerY;    
    
  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX-mouseX/400;
  accelY += deltaY-mouseX/400;

//  // move predator's center
//  centerX += accelX;
//  centerY += accelY;

  // slow down springing
  accelX *= damping;
  accelY *= damping;

  // change curve tightness
  organicConstant = 1-((abs(accelX)+abs(accelY))/55);

  //move nodes
  for (var i=0; i<nodes; i++){
    nodeX[i] = nodeStartX[i]+cos(radians(angle[i]))*(accelX*5);
    nodeY[i] = nodeStartY[i]+sin(radians(angle[i]))*(accelY*5);
    angle[i] += frequency[i];
  }
}


// 2nd Set

function drawShape2() {    
    
  //  calculate node  starting locations
  for (var i=0; i<nodes; i++){
    nodeStartX[i] = centerX+cos(radians(rotAngle))*radius;
    nodeStartY[i] = centerY+sin(radians(rotAngle))*radius;
    rotAngle += 360.0/nodes;
  }

  // draw polygon
  curveTightness(organicConstant);
  fill(255, 255, 0);
  blendMode(MULTIPLY);
  beginShape();
  for (var i=0; i<nodes; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (var i=0; i<nodes-1; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  endShape(CLOSE);
}



function moveShape2() {
  //move center point
//  deltaX = mouseX-centerX;
//  deltaY = mouseY-centerY;

  deltaX = centerX;
  deltaY = centerY;    
    
  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX;
  accelY += deltaY;

//  // move predator's center
//  centerX += accelX;
//  centerY += accelY;

  // slow down springing
  accelX *= damping;
  accelY *= damping;

  // change curve tightness
  organicConstant = 1-((abs(accelX)+abs(accelY))/60);

  //move nodes
  for (var i=0; i<nodes; i++){
    nodeX[i] = nodeStartX[i]+sin(radians(angle[i]))*(accelX*5);
    nodeY[i] = nodeStartY[i]+sin(radians(angle[i]))*(accelY*5);
    angle[i] += frequency[i];
  }
}



// 3rd Set

function drawShape3() {    
    
  //  calculate node  starting locations
  for (var i=0; i<nodes; i++){
    nodeStartX[i] = centerX+cos(radians(rotAngle))*radius;
    nodeStartY[i] = centerY+sin(radians(rotAngle))*radius;
    rotAngle += 360.05/nodes;
  }

  // draw polygon
  curveTightness(organicConstant);
  fill(255, 0, 0);
  blendMode(MULTIPLY);
  beginShape();
  for (var i=0; i<nodes; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (var i=0; i<nodes-1; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  endShape(CLOSE);
}



function moveShape3() {
  //move center point
//  deltaX = mouseX-centerX;
//  deltaY = mouseY-centerY;

  deltaX = centerX;
  deltaY = centerY;    
    
  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX;
  accelY += deltaY;

//  // move predator's center
//  centerX += accelX;
//  centerY += accelY;

  // slow down springing
  accelX *= damping;
  accelY *= damping;

  // change curve tightness
  organicConstant = 1-((abs(accelX)+abs(accelY))/60);

  //move nodes
  for (var i=0; i<nodes; i++){
    nodeX[i] = nodeStartX[i]+sin(radians(angle[i]))*(accelX*6);
    nodeY[i] = nodeStartY[i]+sin(radians(angle[i]))*(accelY*6);
    angle[i] += frequency[i];
  }
}


//window resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255, 100);
//  rect(0,0,width, height);
}

//
//
// function mouseDragged() {
//    stroke(0, 0, 255);
//    strokeCap(round);
//     strokeJoin(ROUND);
//    strokeWeight(2.5); 
//       smooth(); line(mouseX,mouseY,pmouseX,pmouseY);
//  }
//
//
//function keyTyped() {
//    if (key === 'a') {
//         stroke(0,0,255);
//        strokeWeight(5);
//        fill(255);
//        ellipse(mouseX, mouseY, 20, 20); 
//    } else if (key ==='x') {
//        stroke(0,0,255);
//        strokeWeight(5);
//        line(mouseX+8, mouseY-8, mouseX-8, mouseY+8);
//        line(mouseX-8, mouseY-8, mouseX+8, mouseY+8);
//    }
//}