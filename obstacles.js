class Obstacle {
  constructor(oX, oY, oW, oH, image) {
    this.oX = oX;
    this.oXInicial = 800;
    this.oY = oY;
    this.oW = oW;
    this.oH = oH;
    this.image = image;
    this.speed;
  }

  display(score) {
    image(this.image, this.oX, this.oY, this.oW, this.oH);
  }
  update(){
    this.speed = scoreSpeed(score);
    this.oX -= this.speed
  }

  salioTela() {
    return this.oX + this.oW < 0;
  }
}

function scoreSpeed(score){
    if(score <= 10){
      return this.speed = 4
    } else if (score > 10 && score <= 20){
      return this.speed = 6
    } else if(score > 20 && score <= 30){
      return this.speed = 8
    } else if(score > 30 && score <= 40){
      return this.speed = 10
    } else {
      alert("ENHORABUENA, has ganado el juego! ¿Te gustaria jugar de nuevo?")
      return reiniciar(); 
    }
}
    