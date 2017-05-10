//=========== REQUIRED FILES ===========

var Water = require('./Water.js');
var Lillypad = require('./Lillypad.js');
var SafeLanding = require('./SafeLanding.js');
var Log = require('./Log.js');
var Turtle = require('./Turtle.js');
var Car = require('./Car.js');
var Truck = require('./Truck.js');
var Board = require('./Board.js');
var Frog = require('./Frog.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var $ = require('jquery');


//=========== GLOBAL VARIABLES ===========
var playerFrog = new Frog(430, 380, 40, 40);
var water = new Water(0, 0, 900, 150);
var safeLanding = new SafeLanding(0, 140, 900, 40);
var safeLanding2 = new SafeLanding(0, 380, 900, 40);
var newScore = new Board(80, 570);
var lillypadArray = [];
var logArray = [];
var turtleArray = [];
var carArrayLeft = [];
var truckArray = [];
var gameState = ['ready', 'game-on', 'game-over'];
var currentGameState = gameState[0];
var myAudio = new Audio('images/dp_frogger.mp3');
var generatingLillypads = generateLillypads();
var generatingLogs = generateLogs();
var generatingTurtles = generateTurtles();
var generatingLeftCars = generateLeftCars();
var generatingRightTrucks = generateRightTrucks();
// var isEasy = true;


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
    myAudio.play()
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
    newScore.points += 10
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
  currentGameState = gameState[0]
  playerFrog.x = 420
  playerFrog.y = 480;
  playerFrog.lives--

  if (playerFrog.lives < 1) {
    currentGameState === 'game-over';
    playerFrog.lives = 3;
    myAudio.loop = false;
    myAudio.pause();
    context.font = "150px Squada One";
    context.fillText('GAME OVER', 150, 300);
  }
}

function generateLillypads() {
  var x = 30;

  for (var i = 0; i < 5; i++) {
    var lillypads = new Lillypad(x, 20, 80, 30);

    x += 200;
    lillypadArray.push(lillypads);
  }
  return lillypadArray;
}

function generateTurtles(isEasy) {
  var x = 0;
  var pace;

  if (isEasy) {
    pace = 2;
  } else if (isEasy === false) {
    pace = 4;
  }

  for (var i = 0; i < 6; i++) {
    var turtles = new Turtle(x, 60, 80, 30, pace);

    x += 200;
    turtleArray.push(turtles);
  }
  return turtleArray;
}

function generateLogs(isEasy) {
  var x = 900;
  var pace;

  if (isEasy) {
    pace = 2;
  } else if (isEasy === false) {
    pace = 4;
  }

  for (var i = 0; i < 6; i++) {

    var logs = new Log(x, 100, 85, 30, pace);

    x += 200;
    logArray.push(logs);
  }
  return logArray;
}

function generateLeftCars(isEasy) {
  var x = 900;
  var pace;

  if (isEasy) {
    pace = 2;
  } else if (isEasy === false) {
    pace = 4;
  }

  for (var i = 0; i < 4; i++) {
    var cars = new Car(x, 210, 100, 40, pace);

    x -= 200;
    carArrayLeft.push(cars);
  }
  return carArrayLeft;
}

function generateRightTrucks(isEasy) {
  var x = 0;
  var pace;

  if (isEasy) {
    pace = 2;
  } else if (isEasy === false) {
    pace = 4;
  }

  for (var i = 0; i < 4; i++) {
    var trucks = new Truck(x, 320, 100, 40, pace);

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
    playerFrog.drawImage(context);

    generatingLillypads.forEach(function(lillypad) {
      context.drawImage(lillypadImage, lillypad.x, lillypad.y, lillypad.width, lillypad.height)
    });

    generatingLogs.forEach(function(log) {
      log.movLeft();
      context.drawImage(logImage, log.x, log.y, log.width, log.height);
    });

    generatingTurtles.forEach(function(turtle) {
      turtle.movRight();
      context.drawImage(turtleImage, turtle.x, turtle.y, turtle.width, turtle.height);
    });

    generatingLeftCars.forEach(function(car) {
      car.movLeft()
      context.drawImage(carImage, car.x, car.y, car.width, car.height);
    });

    generatingRightTrucks.forEach(function(truck) {
      truck.movRight()
      context.drawImage(truckImage, truck.x, truck.y, truck.width, truck.height);
    });

    context.font = "40px Squada One";
    context.fillStyle = 'rgba(0, 255, 0, 1)';
    context.fillText('Score:', 30, 470);
    context.fillText(newScore.points, 140, 470);
    context.drawImage(logo, 330, 435, 250, 70);
    context.fillText('Lives:', 740, 470);
    context.fillText(playerFrog.lives, 850, 470);

    playerFrog.collisionDetection(canvas, logArray, turtleArray, carArrayLeft, truckArray, resetGame);
    // playerFrog.rideObject(logArray)

  }

  requestAnimationFrame(gameloop);
});

    // pseudo code
    //
    // on page load:
    // be able to start new game or quit game
    // if start new game is clicked/ add start button and Frogger title
    // be able to ride on these obstacles
    // if in water then frog dies
    //
    // once playing
    //
    // falls in the water then frog dies and loses a life (ribbit).
    // - Add Sound to indicate when frog looses life/ and when it makes it to safety/Lillypad and earns points
    //to ride on these obstacles
