



let lost = false;
let won = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  setupMetric();
  setupGrid();
}

function draw() {
  translate(width/2, height/2);
  background(0);

  all();
  drawText();
}
