class Obstacle {
  constructor(oX, oY, oW, oH, color) {
    this.oX = oX;
    this.oXInicial = 760;
    this.oY = oY;
    this.oW = oW;
    this.oH = oH;
    this.color = color
    this.speed = 2;
  }

  display() {
      fill(this.color);
      rect(this.oX, this.oY, this.oW, this.oH);
      
      this.oX -= this.speed;
      if (this.oX + this.oW < 0) {
        this.oX = this.oXInicial;
      }
      
  }
}


//if(score > 120){
  //this.speed = 4}

//if(score > 180){
//this.speed = 6}

//if(score > 240){
//this.speed = 8}

//if(score > 300){
//this.speed = 10}

//if(score > 400){
  //console.log("ENHORABUENA")}