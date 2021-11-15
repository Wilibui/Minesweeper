let lost = false;
let won = false;
let home = true;
let playing = false;

function setup() {
  rectMode(CENTER);  
  createCanvas(windowWidth, windowHeight);
  logo = new Logo();
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  translate(width/2, height/2);
  background(170, 0, 0);
  if(playing){
    main();
    drawMainText();
  }if(home){
    showHome();
  }
}
