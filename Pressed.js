function mousePressed() {
  
  let mX = mouseX - width/2;
  let mY = mouseY - height/2;
  if (!lost && !won && playing) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        grid[i][j].checkClick(0);
      }
    }
  }
  setupMetric();
  if (playing && (lost || won)) {     
    if(-1*s < mX && mX < 2*s){
      if(-6*s < mY && mY < -5*s){     
        nextMap();
      }
    }
  }
  if(home){
    for(let i = -1; i <= 1; i++){
      if(-5*s < mX && mX < 5*s){
        if(-s + i*3*s < mY && mY < s + i*3*s){
          playing = true;
          home = false;
          setupGrid(i);
        }
      }
    }
  }else{
    if(2*s < mX && mX < 5*s){
      if(-6*s < mY && mY < -5*s){
        goHome();
      }
    }
  }
}

function keyPressed() {
  if (!lost && !won && playing) {
    if (keyCode == 70) {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          grid[i][j].checkClick(1);
        }
      }
    }
  }
}
