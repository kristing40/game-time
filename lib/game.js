//=========== REQUIRED FILES ===========

const Water = require('./Water.js');
const Lillypad = require('./Lillypad.js');
const SafeLanding = require('./SafeLanding.js');
const Log = require('./Log.js');
const Turtle = require('./Turtle.js');
const Car = require('./Car.js');
const Truck = require('./Truck.js');
const Board = require('./Board.js');
const Frog = require('./Frog.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const $ = require('jquery');


//=========== GLOBAL VARIABLES ===========

const playerFrog = new Frog(430, 155, 40, 40);
const water = new Water(0, 0, 900, 155);
const safeLanding = new SafeLanding(0, 155, 900, 45);
const safeLanding2 = new SafeLanding(0, 380, 900, 45);
const newScore = new Board(80, 570);
const lillypadArray = [];
const logArray = [];
const turtleArray = [];
const carArrayLeft = [];
const truckArray = [];
const gameState = ['ready', 'game-on', 'game-over'];
let currentGameState = gameState[0];
const myAudio = new Audio('images/dp_frogger.mp3');
const generatingLillypads = generateLillypads();

//========== GLOBAL IMAGES ===========

let lillypadImage = new Image();

lillypadImage.src = 'images/lillypads.png';

let logImage = new Image();

logImage.src = 'images/log.png';

let turtleImage = new Image();

turtleImage.src = 'images/turtle.png';

let carImage = new Image();

carImage.src = 'images/car1.gif';

let truckImage = new Image();

truckImage.src = 'images/truck-blue.png';

let logo = new Image();

logo.src = 'images/logo.png';


//============ EVEMT LISTENERS ===========

window.addEventListener('keydown', function(e) {
  playerFrog.move(e);
});

window.addEventListener('click', function() {
  if (currentGameState === 'ready') {
    currentGameState = gameState[1];
    myAudio.loop = true;
    myAudio.play();
  } else if (currentGameState === 'game-on') {
    currentGameState = gameState[0];
    myAudio.loop = false;
    myAudio.pause();

  } else if (currentGameState === 'game-over') {
    resetGame();
  }
});

window.addEventListener('keydown', function(e) {
  playerFrog.move(e);
  if (e.keyCode === 38) {
    newScore.points += 10;
    console.log(newScore.points);
  }
});

$('#easyGame').on('click', function() {
  let isEasy = true;

  gameStartButtonPage (isEasy);
});

$('#hardGame').on('click', function() {
  let isEasy = false;

  gameStartButtonPage (isEasy);
});

//=========== FUNCTIONS ===========

function gameStartButtonPage (isEasy) {
  $('#game').show();
  $('#startButton').hide();
  $('#logo').hide();
  $('#easyGame').hide();
  $('#hardGame').hide();
  generateTurtles(isEasy);
  generateLogs(isEasy);
  generateLeftCars(isEasy);
  generateRightTrucks(isEasy);
}

function resetGame() {
  currentGameState = gameState[0];
  playerFrog.x = 420;
  playerFrog.y = 380;
  playerFrog.lives--;

  if (playerFrog.lives < 1) {
    currentGameState === 'game-over';
    playerFrog.lives = 3;
    myAudio.loop = false;
    myAudio.pause();
    context.font = "150px Squada One";
    context.fillText('GAME OVER', 150, 300);
    newScore.points = 0;
  }
}

function winner() {
  if (playerFrog.winner) {
    context.font = "150px Squada One";
    context.fillStyle = 'rgba(0, 255, 0, 1)';
    context.fillText('WINNER!', 250, 350);
    newScore.points += 100;
  }
}

function generateLillypads() {
  let x = 30;

  for (let i = 0; i < 5; i++) {
    let lillypads = new Lillypad(x, 25, 45, 30);

    x += 200;
    lillypadArray.push(lillypads);
  }
  return lillypadArray;
}

function generateTurtles(isEasy) {
  let x = 0;
  let pace;

  if (isEasy) {
    pace = 2;
  } else if (isEasy === false) {
    pace = 4;
  }

  for (let i = 0; i < 6; i++) {
    let turtles = new Turtle(x, 65, 80, 30, pace);

    x += 200;
    turtleArray.push(turtles);
  }
  return turtleArray;
}

function generateLogs(isEasy) {
  let x = 900;
  let pace;

  if (isEasy) {
    pace = 2;
  } else if (isEasy === false) {
    pace = 4;
  }

  for (let i = 0; i < 6; i++) {
    let logs = new Log(x, 110, 85, 30, pace);

    x += 200;
    logArray.push(logs);
  }
  return logArray;
}

function generateLeftCars(isEasy) {
  let x = 900;
  let pace;

  if (isEasy) {
    pace = 2;
  } else if (isEasy === false) {
    pace = 4;
  }

  for (let i = 0; i < 4; i++) {
    let cars = new Car(x, 245, 100, 40, pace);

    x -= 200;
    carArrayLeft.push(cars);
  }
  return carArrayLeft;
}

function generateRightTrucks(isEasy) {
  let x = 0;
  let pace;

  if (isEasy) {
    pace = 2;
  } else if (isEasy === false) {
    pace = 4;
  }

  for (let i = 0; i < 4; i++) {
    let trucks = new Truck(x, 335, 100, 40, pace);

    x += 200;
    truckArray.push(trucks);
  }
  return truckArray;
}

requestAnimationFrame(function gameloop() {

  if (currentGameState === 'game-on') {
    context.clearRect(0, 0, canvas.width, canvas.height);

    water.draw(context);
    safeLanding.draw(context);
    safeLanding2.draw(context);

    generatingLillypads.forEach(function(lillypad) {
      context.drawImage(lillypadImage, lillypad.x, lillypad.y, lillypad.width, lillypad.height);
    });

    logArray.forEach(function(log) {
      log.movLeft();
      context.drawImage(logImage, log.x, log.y, log.width, log.height);
    });

    turtleArray.forEach(function(turtle) {
      turtle.movRight();
      context.drawImage(turtleImage, turtle.x, turtle.y, turtle.width, turtle.height);
    });

    carArrayLeft.forEach(function(car) {
      car.movLeft();
      context.drawImage(carImage, car.x, car.y, car.width, car.height);
    });

    truckArray.forEach(function(truck) {
      truck.movRight();
      context.drawImage(truckImage, truck.x, truck.y, truck.width, truck.height);
    });

    context.font = "40px Squada One";
    context.fillStyle = 'rgba(0, 255, 0, 1)';
    context.fillText('Score:', 30, 490);
    context.fillText(newScore.points, 140, 490);
    context.drawImage(logo, 330, 445, 250, 70);
    context.fillText('Lives:', 740, 490);
    context.fillText(playerFrog.lives, 850, 490);

    playerFrog.drawImage(context);

    playerFrog.collisionDetection(canvas, logArray, turtleArray, carArrayLeft, lillypadArray, truckArray, resetGame);

    winner();
  }
  requestAnimationFrame(gameloop);
});
