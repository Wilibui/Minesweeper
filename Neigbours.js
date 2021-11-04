function calcNeigbours(I, J) {
  let n = 0;
  for ( let ioff = -1; ioff <= 1; ioff++) {
    for ( let joff = -1; joff <= 1; joff++) {
      let i = I + ioff;
      let j = J + joff;
      if (i > -1 && i < size && j > -1 && j < size) {
        if (grid[i][j].n == 10) {
          n++;
        }
      }
    }
  }
  return n;
}

function openNeigbours(I, J) {
  for ( let ioff = -1; ioff <= 1; ioff++) {
    for ( let joff = -1; joff <= 1; joff++) {
      let i = I + ioff;
      let j = J + joff;
      if (i > -1 && i < size && j > -1 && j < size) {
        grid[i][j].open = true;
      }
    }
  }
}
