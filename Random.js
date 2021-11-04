function main() {
  let o = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {      
      grid[i][j].show();      
      if (grid[i][j].n == 0 && grid[i][j].open && !grid[i][j].flagged) {
        openNeigbours(i, j);
      }
      if (grid[i][j].open && grid[i][j].n != 10) {
        o++;
      }
      if (o == sq(size)-nBoms) {
        win();
      }
    }
  }
}

function drawMainText() {
   setupMetric();
  noStroke();
  textAlign(LEFT, CENTER);
  fill(255, 255, 0);
  circle(-4.5*s, -5.6*s, r);
  fill(255);
  textSize(0.7*t);
  text(nFlags + " / " + nBoms, -3.7*s, -5.5*s);
  text("To place a flag press: F", -5*s, 5.8*s);
  textAlign(CENTER, CENTER);
  fill(0, 255, 255);
  stroke(255);
  rect(3.5*s, -5.5*s, 3*s, 1*s);
  noStroke();
  fill(0);
  text("Home", 3.5*s, -5.5*s);
  if (lost || won) {
    fill(255, 255, 0);
    stroke(255);
    rect(0.5*s, -5.5*s, 3*s, 1*s);
    noStroke();
    fill(0);
    text("Next Map", 0.5*s, -5.5*s);
  }
    
}

function nextMap(){
  lost = false;
  won = false;
  setupGrid();
  nFlags = 0;
}

function lose() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) { 
      if (grid[i][j].n == 10) {
        grid[i][j].open = true;
      }
    }
  }
  lost = true;
}

function win() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) { 
      if (grid[i][j].n == 10) {
        grid[i][j].open = true;
      }
    }
  }
  nFlags = nBoms;
  won = true;
}
