let score = 0;
let interval;
let juegoIniciado = false;
let obstaculos = [];


function elegirObsAleatorio() {
  return random([
    new Obstacle(800, 350, 30, 30, "yellow"),
    new Obstacle(800, 280, 30, 30, "green")
  ]);
}

function iniciar() {
  interval = setInterval(() => {
    score += 1;
  }, 1000);
  player = new Player(20, 330, 50, 50);
  obstaculos = [elegirObsAleatorio()];
  juegoIniciado = true;
}

function reiniciar() {
  score = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    score += 1;
  }, 1000);
  player = new Player(20, 330, 50, 50);
  obstaculos = [elegirObsAleatorio()];
  juegoIniciado = true;
}

function preload() {
  img = loadImage("./assets/background-zombie.jpg");
}

function setup() {
  createCanvas(800, 400);
  image(img, 0, 0);

  let play = createButton("Iniciar");
  play.position(90, 20);
  play.style("background-color", "#3a8002");
  play.style("color", "white");
  play.style("padding", "10px");
  play.style("border-radius", "8px");
  play.style("border", "none");
  play.style("cursor", "pointer");
  play.mousePressed(() => {
    iniciar();
  });

  let replay = createButton("Reiniciar");
  replay.position(150, 20);
  replay.style("background-color", "#3a8002");
  replay.style("color", "white");
  replay.style("padding", "10px");
  replay.style("border-radius", "8px");
  replay.style("border", "none");
  replay.style("cursor", "pointer");
  replay.mousePressed(() => {
    reiniciar();
  });

  player = new Player(20, 330, 50, 50);
}

function draw() {
  background(img);
  fill(255, 0, 0);

  line(0, 380, 800, 380);
  stroke("#3a8002");
  strokeWeight(0.5);

  textSize(32);
  fill("amarillo");
  textAlign(RIGHT, TOP);
  text("Score: " + score, width - 20, 20);

  player.display();
  player.update();


  if (juegoIniciado) {
    for (let i = obstaculos.length - 1; i >= 0; i--) {
      const obs = obstaculos[i];
      obs.display();
      obs.update(score);

      if (obs.salioTela()) {
        obstaculos.splice(i, 1);
      }
    }
    if (obstaculos.length > 0 && obstaculos[obstaculos.length - 1].oX < width * 0.4) {
      obstaculos.push(elegirObsAleatorio());
    }

    checkColision();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    player.jump();
  }
}

  function checkColision() {
    let collided = (obstacle) =>
      player.pX < obstacle.oX + obstacle.oW &&
      player.pX + player.pW > obstacle.oX &&
      player.pY < obstacle.oY + obstacle.oH &&
      player.pY + player.pH > obstacle.oY;

      for (let obs of obstaculos) {
        if (collided(obs)) {
          alert("GAME OVER! Deseja tentar novamente?");
          reiniciar();
          break;
      }
    }
  }
