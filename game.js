let score = 0;
const btnReiniciar = document.getElementById("botton-reinicio");

function preload() {
  img = loadImage("./assets/background-zombie.jpg");
}

function setup() {
  createCanvas(800, 400); 

  image(img, 0, 0);

  player = new Player(20, 330, 50, 50);
  obstacle1 = new Obstacle(760, 350, 30, 30, "yellow");
  obstacle2 = new Obstacle(1200, 280, 30, 30, "green");
}

function draw() {
  background(img);
  fill(255, 0, 0);

  player.display();
  obstacle1.display();
  obstacle2.display();

  function score() {
    textSize(32);
    fill("amarillo");
    textAlign(RIGHT, TOP);
    text("Score: " + score, width - 20, 20);
  }

}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    player.jump();
  }
}

btnReiniciar.addEventListener("click", reiniciar())


