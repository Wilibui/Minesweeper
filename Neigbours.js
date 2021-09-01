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
