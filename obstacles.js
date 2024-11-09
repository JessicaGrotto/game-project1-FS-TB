class Obstacle {
  constructor(oX, oY, oW, oH, color) {
    this.oX = oX;
    this.oXInicial = 760;
    this.oY = oY;
    this.oW = oW;
    this.oH = oH;
    this.color = color;
    this.speed; //como colocar a condicional para atualizar com scoreSpeed()
  }

  display(score) {
      fill(this.color);
      rect(this.oX, this.oY, this.oW, this.oH);

      this.speed = scoreSpeed(score);
      
      this.oX -= this.speed;
      if (this.oX + this.oW < 0) {
        this.oX = this.oXInicial;
      } 
    }
  }

  function scoreSpeed(score){
      if(score <= 10){
        return this.speed = 2
      } else if (score > 10 && score <= 20){
        return this.speed = 5
      } else if(score > 20 && score <= 30){
        return this.speed = 7
      } else if(score > 30 && score <= 40){
        return this.speed = 9
      } else {
        alert("ENHORABUENA, has ganado el juego! ¿Te gustaria jugar de nuevo?")
        return reiniciar(); 
      }
    }
    