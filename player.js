class Player {
    constructor(image, pX, pY, pH, pW) {
      this.pInicialY = 330;
      this.pX = pX;
      this.pY = pY
      this.pW = pW;
      this.pH = pH;
      this.image = image
      this.velocity = 0;
      this.gravity = 0.35;
      this.impulso = -9;
    }
  
    display() {
      image(this.image, this.pX, this.pY, this.pW, this.pH);
    }
  
    jump() {
      if (this.pY === this.pInicialY) {
        this.velocity = this.impulso;
        
      }
    }
    update() {
        this.pY += this.velocity;
        this.velocity += this.gravity; 
    
        if (this.pY > this.pInicialY) {
          this.pY = this.pInicialY;
          this.velocity = 0;
        }
    } 
}
