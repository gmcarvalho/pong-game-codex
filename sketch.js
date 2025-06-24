let leftPaddle;
let rightPaddle;
let ball;
let leftScore = 0;
let rightScore = 0;
const winningScore = 4; // points needed to win a round
let roundOver = false;
let restartButton;

let bgImg;
let paddle1Img;
let paddle2Img;
let ballImg;
let hitSound;
let scoreSound;

function preload() {
  bgImg = loadImage('assets/fundo4.png');
  paddle1Img = loadImage('assets/barra01.png');
  paddle2Img = loadImage('assets/barra02.png');
  ballImg = loadImage('assets/bola1.png');
  hitSound = loadSound('assets/batida.wav');
  scoreSound = loadSound('assets/gol.wav');
}

function setup() {
  createCanvas(800, 450);
  leftPaddle = new Paddle(40, 87, 83, paddle1Img, 'mouse'); // controlled by mouse
  rightPaddle = new Paddle(width - 40, UP_ARROW, DOWN_ARROW, paddle2Img, 'ai');
  ball = new Ball(ballImg);
  textAlign(CENTER, CENTER);
  textSize(32);
  restartButton = createButton('Reiniciar');
  restartButton.id('restart-button');
  restartButton.mousePressed(restartGame);
  restartButton.hide();
}

function draw() {
  if (bgImg) {
    background(bgImg);
  } else {
    background(0);
  }

  if (!roundOver) {
    leftPaddle.update();
    rightPaddle.update();
    ball.update();

    if (ball.checkPaddle(leftPaddle) || ball.checkPaddle(rightPaddle)) {
      if (hitSound && hitSound.isLoaded()) {
        hitSound.play();
      }
    }

    const out = ball.outOfBounds();
    if (out) {
      if (out === 'left') {
        leftScore++;
        ball.resetDirection = -1;
      } else if (out === 'right') {
        rightScore++;
        ball.resetDirection = 1;
      }
      if (scoreSound && scoreSound.isLoaded()) {
        scoreSound.play();
      }
      ball.reset(ball.resetDirection);

      if (leftScore >= winningScore || rightScore >= winningScore) {
        roundOver = true;
        ball.vx = 0;
        ball.vy = 0;
        restartButton.show();
      }
    }
  }

  leftPaddle.draw();
  rightPaddle.draw();
  ball.draw();

  fill(255);
  text(leftScore, width / 4, 30);
  text(rightScore, (3 * width) / 4, 30);

  if (roundOver) {
    displayWinner();
  }
}

function displayWinner() {
  const winner = leftScore >= winningScore ? 'Jogador 1 venceu!' : 'Jogador 2 venceu!';
  textSize(48);
  fill(255, 215, 0);
  text(winner, width / 2, height / 2 - 20);
  textSize(32);
}

function restartGame() {
  leftScore = 0;
  rightScore = 0;
  roundOver = false;
  ball.reset(random() < 0.5 ? -1 : 1);
  restartButton.hide();
}
