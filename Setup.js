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

function setupGrid(i) { 
  size = 20 + (i*10);
  nBoms = sq(size)/10;
  grid = Array.from(Array(size), () => new Array(size));
  
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid[i][j] = new Grid(i, j);
    }
  }
  if(nBoms > sq(size)){nBoms = sq(size);}
  for (let i = 0; i < nBoms; i++) {
    let x = round(random(0, size-1));
    let y = round(random(0, size-1));   
    while (grid[x][y].n == 10) {
      x = round(random(0, size-1));
      y = round(random(0, size-1));
    }
    grid[x][y].n = 10;
  }
  
  
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) { 
      grid[i][j].calcN();
    }
  }
}
