function goHome(){
  playing = false;
  lost = false;
  won = false;
  home = true;
  nFlags = 0;
}

function showHome(){
  setupMetric();
  strokeWeight(s/10);
  rectMode(CENTER, CENTER); 
  textSize(2*t);
  stroke(255);
  for(let i = -1; i <= 1; i++){
    red = map(i, -1, 1, 0, 255);
    green = map(i, -1, 1, 255, 0);
    blue = 50;
    fill(red, green, blue);
    rect(0*s,i*3*s,10*s,2*s);
  }
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("EASY", 0, -3*s);
  text("MEDIUM", 0, 0);
  text("HARD", 0, 3*s);
  text("Minesweeper", 0, -5*s);
  textAlign(LEFT, BOTTOM);
  textSize(t);
  text("Made by Wilibui", -3*s, 6*s);
  logo.update(-4*s, 5.5*s, s/2);
  logo.show();
}
