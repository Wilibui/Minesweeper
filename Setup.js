let nBoms = 10;
let nFlags = 0;
let size = 10;

let r;
let s;
let t;

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
      x = round(random(0, 9));
      y = round(random(0, 9));
    }
    grid[x][y].n = 10;
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) { 
      grid[i][j].calcN();
    }
  }
}
