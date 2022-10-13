const canvas = document.querySelector(`#canvas`);
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "../images/road.png";

const car = new Image();
car.src = "../images/car.png";

let backgroundY = 0;
let backgroundY2 = 0;

backgroundY += 4
backgroundY2 += 4

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log("start-button")
    startGame();
  };

  function startGame() {
    ctx.drawImage(background, 0, backgroundY, canvas.width, canvas.height);
    ctx.drawImage(background, 0, backgroundY2, canvas.width, canvas.height);
    ctx.drawImage(car, 215, 500, 70, 120);

    if (backgroundY > canvas.height) { 
      backgroundY = -canvas.height - 20;
    }
    if (backgroundY2 > canvas.height){
      backgroundY2 = -canvas.height;
    }
    setTimeout(startGame, 200)
  }
};
