let gridOne;
let grid;

class Grid {
  constructor(I, J) {
    setupMetric();
    r = r/(size/10);
    s = s/(size/10);
    t = t/(size/10);
    this.n = 0;    
    this.open = false;
    this.flagged = false;
    this.i = I;
    this.j = J;
    this.open = false;
    this.x = s * (this.i-(size/2)+0.5);
    this.y = s * (this.j-(size/2)+0.5);
  }

  show() {    
    setupMetric();
    r = r/(size/10);
    s = s/(size/10);
    t = t/(size/10);
    fill(200);
    stroke(255);
    strokeWeight(s/10);
    this.x = s * (this.i-(size/2)+0.5);
    this.y = s * (this.j-(size/2)+0.5);
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
    setupMetric();
    r = r/(size/10);
    s = s/(size/10);
    t = t/(size/10);
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
