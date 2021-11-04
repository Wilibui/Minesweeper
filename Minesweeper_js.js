let lost = false;
let won = false;
let home = true;
let playing = false;

function setup() {
  rectMode(CENTER);  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  translate(width/2, height/2);
  background(0);
  if(playing){
    main();
    drawMainText();
  }if(home){
    showHome();
  }
}
