//REQUIRED FILES
var Frog = require('./Frog.js');
var MvgObstacle = require('./MovingObstacle.js');
var Water = require('./Water.js');
var SafeLanding = require('./SafeLanding.js');
var Log = require('./Log.js');
var Turtle = require('./Turtle.js');
var Lillypad = require('./Lillypad.js');
var Board = require('./Board.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


//GLOBAL VARIABLES
var playerFrog = new Frog(420, 480, 40, 40);
var newMvgObstacle = new MvgObstacle(0, 480, 80, 30, 3);
var log = new Log(0, 80, 80, 30, 3);
var water = new Water(0, 0, 900, 250);
var safeLanding = new SafeLanding(0, 230, 900, 40);
var safeLanding2 = new SafeLanding(0, 480, 900, 40);
var lillypad1 = new Lillypad(140, 0, 30, 30);
var lillypad2 = new Lillypad(340, 0, 30, 30);
var lillypad3 = new Lillypad(540, 0, 30, 30);
var lillypad4 = new Lillypad(740, 0, 30, 30);
var newScore = new Board(80, 570)
var carArray = [];
var carArrayLeft = [];
var turtleArray = [];
var logArray = [];
var gameState = ['ready', 'game-on', 'game-over']
var currentGameState = gameState[0];

var generatingRightTrucks = generateRightTrucks();
var generatingLeftCars = generateLeftCar();
var generatingTurtles = generateTurtles();
var makeLogs = generateLogs();

//EVEMT LISTENERS
window.addEventListener('keydown', function(e) {
  playerFrog.move(e);
});

window.addEventListener('click', function() {
  if (currentGameState === 'ready') {
    currentGameState = gameState[1];
  } else if (currentGameState === 'game-on') {
    currentGameState = gameState[0];
  } else if (currentGameState === 'game-over') {
    resetGame();
  }
})

window.addEventListener('keydown', function(e) {
  playerFrog.move(e);
  if (e.keyCode === 38) {
    newScore.points += 10
    console.log(newScore.points);
  }
})

//FUNCTIONS
function resetGame() {
  currentGameState = gameState[0]
  playerFrog.x = 420
  playerFrog.y = 480;
  playerFrog.lives--

  if (playerFrog.lives < 1) {
    currentGameState === 'game-over'
    playerFrog.lives = 3;
    context.font = "150px Squada One";
    context.fillText('GAME OVER', 150, 300);
  }
}

function generateRightTrucks() {
  var x = 0;

  for (var i = 0; i < 4; i++) {
    var trucks = new MvgObstacle(x, 430, 80, 30, 3);

    x += 200;
    carArray.push(trucks);
  }
  return carArray;
}

function generateLeftCar() {
  var x = 900;

  for (var i = 0; i < 4; i++) {
    var car = new MvgObstacle(x, 300, 80, 20, 3);

    x -= 200;
    carArrayLeft.push(car);
  }
  return carArrayLeft;
}

function generateLogs() {
  var x = 100;

  for (var i = 0; i < 4; i++) {
    var logs = new Log(x, 80, 80, 30, 4);

    x += 200;
    logArray.push(logs);
  }
  return logArray;
}

function generateTurtles() {
  var x = 0;

  for (var i = 0; i < 4; i++) {
    var turtles = new Turtle(x, 170, 80, 30, 3);

    x += 200;
    turtleArray.push(turtles);
  }
  return turtleArray;
}

generateRightTrucks();
generateLeftCar();
generateTurtles();

generatingTurtles.forEach(function(turtle) {
  turtle.movLeft();
  turtle.draw(context);
});

makeLogs.forEach(function(log) {
  log.movRight();
  log.draw(context)
})

generatingRightTrucks.forEach(function(truck) {
  truck.movRight()
  truck.draw(context)
});

generatingLeftCars.forEach(function(car) {
  car.movLeft()
  car.draw(context)
});

drawPageStart();

function drawPageStart() {
  // water.draw(context);
  newMvgObstacle.draw(context);
  safeLanding.draw(context);
  safeLanding2.draw(context);
  lillypad1.draw(context);
  lillypad2.draw(context);
  lillypad3.draw(context);
  lillypad4.draw(context);
  log.drawImage(context);
  playerFrog.drawImage(context);
}

requestAnimationFrame(function gameloop() {
  if (currentGameState === 'game-on') {
    context.clearRect(0, 0, canvas.width, canvas.height);

    makeLogs.forEach(function(log) {
      log.movRight();
      log.draw(context)
    })

    generatingRightTrucks.forEach(function(truck) {
      truck.movRight()
      truck.draw(context)
    });

    generatingLeftCars.forEach(function(car) {
      car.movLeft()
      car.draw(context)
    });

    generatingTurtles.forEach(function(turtle) {
      turtle.movLeft();
      turtle.draw(context);
    });

    drawPageStart();

    context.font = "40px Squada One";
    context.fillText('Score:', 30, 570);
    context.fillText(newScore.points, 140, 570);
    context.fillText('FROGGER', 350, 570);
    context.fillText('Lives:', 745, 570);
    context.fillText(playerFrog.lives, 850, 570);

    collisionDetection();

  }
  requestAnimationFrame(gameloop);
});

generateRightTrucks();
generateLogs();
generateLeftCar()
generateTurtles();

function collisionDetection() {
  if (playerFrog.x < 0 || playerFrog.x + playerFrog.width > canvas.width || playerFrog.y < 0) {
    resetGame();
  } else if (playerFrog.y + playerFrog.height > canvas.height) {
    resetGame();

  } else {
    carArray.forEach(function(car) {
      if (playerFrog.x < car.x + car.width &&
            playerFrog.x + playerFrog.width > car.x &&
            playerFrog.y < car.y + car.height &&
            playerFrog.height + playerFrog.y > car.y) {
        newScore.points = 0;
        resetGame();
      }
    });

    carArrayLeft.forEach(function(car) {
      if (playerFrog.x < car.x + car.width &&
            playerFrog.x + playerFrog.width > car.x &&
            playerFrog.y < car.y + car.height &&
            playerFrog.height + playerFrog.y > car.y) {
        newScore.points = 0;
        resetGame();
      }
    });
  }
}

    // pseudo code
    //
    // on page load:
    // be able to start new game or quit game
    //
    // if start new game is clicked/ add start button and Frogger title
    //
    // get logs of different sizes moving across river,
    // get turtles moving
    // be able to ride on these obstacles
    // if in water then frog dies
    // reposition cars
    //
    // once playing

    // falls in the water then frog dies and loses a life (ribbit).
    // - Add Sound to indicate when frog looses life/ and when it makes it to safety/Lillypad and earns points
    //to ride on these obstacles
    // if in water then frog dies
    // reposition cars
    //
