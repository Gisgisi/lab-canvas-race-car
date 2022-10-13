const canvas = document.querySelector(`#canvas`);
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "../images/road.png";

const car = new Image();
car.src = "../images/car.png";

let backgroundY = 0;
let backgroundY2 = 0;
let carx = 210;

//backgroundY += 4;
//backgroundY2 += 4;

function clearCtx() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, backgroundY, canvas.width, canvas.height);
}

function moveLeft() {
  if (carx >= 80){
    clearCtx();
    carx -= 5;
    ctx.drawImage(car, carx, 500, 70, 120);
  };
};

function moveRight() {
  if (carx<=canvas.width - 140) {
  clearCtx();
  ctx.drawImage(car, carx, 500, 70, 120);
  carx += 5;
  }
};

function startGame() {
  ctx.drawImage(background, 0, backgroundY, canvas.width, canvas.height);
  ctx.drawImage(background, 0, backgroundY2, canvas.width, canvas.height);
  ctx.drawImage(car, carx, 500, 70, 120);

  // if (backgroundY > canvas.height) {
  //   backgroundY = -canvas.height - 20;
  // }
  // if (backgroundY2 > canvas.height) {
  //   backgroundY2 = -canvas.height;
  // }

};


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

