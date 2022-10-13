const canvas = document.querySelector(`#canvas`);
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "../images/road.png";

const car = new Image();
car.src = "../images/car.png";


let background1Y = 0;
let background2Y = 0;
let carX = 210, carY = 500;
let obsX = 60, obsY = -60;

//how the game works

let intervalId;

function startGame() {
  if ( !intervalId ) {
    obsX = 60, obsY = -60;
    scoreElement.innerText = "";
    intervalId = setInterval(() => {
      handler();
    }, 50);
  }
};

scoreElement = document.getElementById("score");
let score = parseInt( scoreElement.innerText );

function handler() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, background1Y, canvas.width, canvas.height);
  ctx.drawImage(background, 0, background2Y, canvas.width, canvas.height);
  ctx.fillRect(obsX, obsY, 120, 40);
  ctx.drawImage(car, carX, carY, 70, 120);

  obsY += 20;
  if (obsY >= canvas.height) {
    obsY = -40;
    obsX = randomIntFromInterval(60, canvas.width - 160);
  }

  if (background2Y >= 50) {
    background2Y = 0;
  }
  background2Y += 10;
  
  if ( ( carX >= obsX - 35 && carX <= obsX + 120 ) && carY <= obsY ){
    score = "Game Over";
    scoreElement.innerText = score;
    clearInterval(intervalId);
    intervalId = 0;
  }
}

function moveLeft() {
  if (carX >= 80) {
    carX -= 20;
  };
};

function moveRight() {
  if (carX <= canvas.width - 140) {
    carX += 20;
  }
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


document.addEventListener('keydown', Event => {
  if (Event.key === 'ArrowLeft') {
    moveLeft();
  }
  if (Event.key === `ArrowRight`) {
    moveRight();
  }
});

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log("start-button")
    startGame();
  };
}

