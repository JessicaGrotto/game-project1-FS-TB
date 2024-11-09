let score = 0;
let interval;


function reiniciar() {
  score = 0;
  return score;
}

function preload() {
  img = loadImage("./assets/background-zombie.jpg");
}

function setup() {
  createCanvas(800, 400); 

  image(img, 0, 0);

  let button = createButton('Reiniciar');
  button.position(150, 20);
  button.mousePressed(() => {
    reiniciar();
  });

  //PREGUNTA: ESTA SE QUEDANDO EN LA COLOR NUEVA, NO SOLO CUANDO HACE CLICK
  button.mousePressed(() => {
    button.style('background-color', '#9c911a')});
    
  button.style('background-color', '#3a8002');
  button.style('color', 'white');
  button.style('padding', '10px');
  button.style('border-radius', '8px');
  button.style('border', 'none');
  button.style('cursor', 'pointer');

  player = new Player(20, 330, 50, 50);
  obstacle1 = new Obstacle(760, 350, 30, 30, "yellow");
  obstacle2 = new Obstacle(1200, 280, 30, 30, "green");

  interval = setInterval(() => {
    score += 1;
  }, 1000);
}

function draw() {
  background(img);
  fill(255, 0, 0);

  player.display();
  player.update();
  obstacle1.display(score);
  obstacle2.display(score);

  textSize(32);
  fill("amarillo");
  textAlign(RIGHT, TOP);
  text("Score: " + score, width - 20, 20);
}

function keyPressed() {
  if (keyCode === 32) {
    player.jump();
  }
}


