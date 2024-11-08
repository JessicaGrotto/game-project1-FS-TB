
class Player {
    constructor(pX, pY, pH, pW) {
      this.pInicialY = 330;
      this.pX = pX;
      this.pY = pY
      this.pW = pW;
      this.pH = pH;
      this.velocity = 0;
      this.gravity = 0.5;
      this.impulso = -15;
    }
  
    display() {
      fill(255);
      rect(this.pX, this.pY, this.pW, this.pH);
    }
  
    //update() {
    //  this.pY += this.velocity;
    //  this.velocity += this.gravity;
  
      // Impedir que o dinossauro saia da tela
    //  if (this.pY > pH - 40) {
    //    this.pY = pH - 40;
    //    this.velocity = 0;
    //  }
    //}
  
    jump() {
      if (this.pY === pInicialY) {
        this.velocity = this.lift;
        squareY -= 40
      }
    }
  }