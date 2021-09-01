function mousePressed() {
  if (!lost && !won) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        grid[i][j].checkClick(0);
      }
    }
  }

  if (lost || won) {
    let mX = mouseX - width/2;
    let mY = mouseY - height/2;
    if(1*s < mX && mX < 5*s){
      if(-6*s < mY && mY < -5*s){
        nextMap();
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
