let p = 1;
let moonImage;

function setup() {
  createCanvas(600,600);
  moonImage = loadImage('assets/fullMoon.png');
}

function draw() {
  background(0);
  frameRate(1);

  p++;
  p = p % 30;
  
  noStroke();
  drawStars(750);
  image(moonImage, width/2.33, height/2.399, 97, 97);
  fill(0);
  drawEarthShadow(width/2, height/2, 100, p); //phases range from 1-30
  fill(224,9,74);
  textSize(32);
  strokeWeight(3);
  stroke(0);
  text("Moon Phase", (width/2)-85, (height/2)-105);
  text(p+1, (width/2)-10, (height/2)-70);
}


function drawEarthShadow(x, y, size, phase){
   const sCorrect = 6.66;
  
  //draws the shadow
  
  if (phase >= 15){
    ellipse(x + size -((phase-15)*sCorrect), y, size, size);
  }else{
    ellipse(x-(phase*sCorrect), y, size, size);
  } 
}

  //draws random stars

function drawStars(numStars){
  fill(255, 255, 255);
  for (i = 0; i < numStars; i++){
  rect(random(width), random(height), 1, 1);
  }
}