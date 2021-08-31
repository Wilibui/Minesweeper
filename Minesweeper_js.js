let grid = [[],[],[],[],[],[],[],[],[],[]];
let nBoms = 20;
let nFlags = 0;
let size = 10;
let r;
let s;
let t;

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


function mousePressed() {
  print("hey");
  if (!lost && !won) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        grid[i][j].checkClick(0);
      }
    }
  }
}

function keyPressed() {
  if (!lost && !won) {
    if (keyCode == 70) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          grid[i][j].checkClick(1);
        }
      }
    }
  }
}


class Grid {
  constructor(I, J) {
    this.n = 0;    
    this.open = false;
    this.flagged = false;
    this.i = I;
    this.j = J;
    this.open = false;
    this.x = s * (this.i-4.5);
    this.y = s * (this.j-4.5);
  }

  show() {
    fill(200);
    stroke(255);
    strokeWeight(s/10);
    square(this.x, this.y, s);

    if (this.open) {
      if (this.n == 10) {
        if (this.flagged || won) {
          fill(0, 255, 0);
        } else {
          fill(255, 0, 0);
        }
        noStroke();
        circle(this.x, this.y, r);
      } else if (this.n == 0) {
        fill(100);
        stroke(255);
        strokeWeight(s/10);
        square(this.x, this.y, s);
      } else {
        fill(100);       
        stroke(255);
        strokeWeight(s/10);
        square(this.x, this.y, s);
        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(t);
        text(this.n, this.x, this.y + 0.1*s);
      }
    } else if (this.flagged) {
      fill(255, 255, 0);
      noStroke();
      circle(this.x, this.y, r);
    }
  }

  checkClick(f) {
    let mX = mouseX - width/2;
    let mY = mouseY - height/2;
    if (this.x - s/2 < mX && mX < this.x + s/2) {
      if (this.y - s/2 < mY && mY < this.y + s/2) {
        if (!this.open && f == 0 && !this.flagged) {
          this.open = true;
          if (this.n == 10) {
            lose();
          }
        }
        if (f == 1 && !this.open) {
          if (this.flagged) {
            this.flagged = false;
            nFlags--;
          } else {
            this.flagged = true;
            nFlags++;
          }
        }
      }
    }
  }

  calcN() {
    if (this.n != 10) {
      this.n = calcNeigbours(this.i, this.j);
    }
  }
}


function all() {
  let o = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {      
      grid[i][j].show();      
      if (grid[i][j].n == 0 && grid[i][j].open && !grid[i][j].flagged) {
        openNeigbours(i, j);
      }
      if (grid[i][j].open) {
        o++;
      }
      if (o == sq(size)-nBoms) {
        win();
      }
    }
  }
}

function drawText(){
  noStroke();
  textAlign(LEFT, CENTER);
  fill(255, 255, 0);
  circle(-4.5*s, -5.6*s, r);
  fill(255);
  textSize(0.8*t);
  text(nFlags + " / " + nBoms, -3.7*s, -5.5*s);
  text("To place a flag press: F", -5*s, 5.8*s);
}

function setupMetric() {
  if (width <= height) {
    r = width/18;
    s = width/13;
    t = width/15;
  } else {
    r = height/18;
    s = height/13;
    t = height/15;
  }
}

function setupGrid() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      grid[i][j] = new Grid(i, j);
    }
  }
  for (let i = 0; i < nBoms; i++) {
    let x = round(random(0, 9));
    let y = round(random(0, 9));   
    while (grid[x][y].n == 10) {
      let x = round(random(0, 9));
      let y = round(random(0, 9));
    }
    grid[x][y].n = 10;
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) { 
      grid[i][j].calcN();
    }
  }
}


function lose() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) { 
      if (grid[i][j].n == 10) {
        grid[i][j].open = true;
      }
    }
  }

  lost = true;
}

function win() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) { 
      if (grid[i][j].n == 10) {
        grid[i][j].open = true;
      }
    }
  }
  nFlags = nBoms;
  won = true;
}


function calcNeigbours(i, j) {
  let n = 0;
  if (i > 0) {
    if (grid[i-1][j].n == 10) {
      n++;
    }
  }
  if (i < 9) {
    if (grid[i+1][j].n == 10) {
      n++;
    }
  }
  if (j > 0) {
    if (grid[i][j-1].n == 10) {
      n++;
    }
  }
  if (j < 9) {
    if (grid[i][j+1].n == 10) {
      n++;
    }
  }
  if (i > 0 && j > 0) {
    if (grid[i-1][j-1].n == 10) {
      n++;
    }
  }
  if (i > 0 && j < 9) {
    if (grid[i-1][j+1].n == 10) {
      n++;
    }
  }
  if (i < 9 && j > 0) {
    if (grid[i+1][j-1].n == 10) {
      n++;
    }
  }
  if (i < 9 && j < 9) {
    if (grid[i+1][j+1].n == 10) {
      n++;
    }
  }
  return n;
}

function openNeigbours(i, j) {
  if (i > 0) {
    grid[i-1][j].open = true;
  }
  if (i < 9) {
    grid[i+1][j].open = true;
  }
  if (j > 0) {
    grid[i][j-1].open = true;
  }
  if (j < 9) {
    grid[i][j+1].open = true;
  }
  if (i > 0 && j > 0) {
    grid[i-1][j-1].open = true;
  }
  if (i > 0 && j < 9) {
    grid[i-1][j+1].open = true;
  }
  if (i < 9 && j > 0) {
    grid[i+1][j-1].open = true;
  }
  if (i < 9 && j < 9) {
    grid[i+1][j+1].open = true;
  }
}
