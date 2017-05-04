var Frog = require('./Frog.js');
var MvgObstacle = require('./MovingObstacle.js');
var Water = require('./Water.js');
var SafeLanding = require('./SafeLanding.js');
var Log = require('./Log.js');
var Turtle = require('./Turtle.js');
var Lillypad = require('./Lillypad.js');
var Board = require('./Board.js');
var Square = require('./Square.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var playerFrog = new Frog(420, 480, 40, 40);
var newMvgObstacle = new MvgObstacle(0, 480, 80, 30, 3);
var water = new Water(0, 0, 900, 250);
var safeLanding = new SafeLanding(0, 230, 900, 40);
var safeLanding2 = new SafeLanding(0, 480, 900, 40);
var lillypad1 = new Lillypad(140, 0, 30, 30);
var lillypad2 = new Lillypad(340, 0, 30, 30);
var lillypad3 = new Lillypad(540, 0, 30, 30);
var lillypad4 = new Lillypad(740, 0, 30, 30);
var carArray = [];
var carArrayLeft = [];
var turtleArray = [];
var log = [];

var gameState = ['ready', 'game-on', 'game-over']

var currentGameState = gameState[0];

window.addEventListener('click', function() {
  if (currentGameState === 'ready') {
    currentGameState = gameState[1];
  } else if (currentGameState === 'game-on') {
    currentGameState = gameState[0];
  } else if (currentGameState === 'game-over')    {
    resetGame();
  }
})

function resetGame() {
  currentGameState = gameState[0]
  playerFrog.x = 420
  playerFrog.y = 480;
  // you lose message
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

var generatingRightTrucks = generateRightTrucks();
var generatingLeftCars = generateLeftCar();


playerFrog.draw(context);
safeLanding.draw(context);
safeLanding2.draw(context);
water.draw(context);
lillypad1.draw(context);
lillypad2.draw(context);
lillypad3.draw(context);
lillypad4.draw(context);


generatingRightTrucks.forEach(function(truck) {
  truck.movRight()
  truck.draw(context)
})

generatingLeftCars.forEach(function(car) {
  car.movLeft()
  car.draw(context)
})

water.draw(context);
newMvgObstacle.draw(context);
safeLanding.draw(context);
safeLanding2.draw(context);
lillypad1.draw(context);
lillypad2.draw(context);
lillypad3.draw(context);
lillypad4.draw(context);
playerFrog.draw(context);


requestAnimationFrame(function gameloop() {
  if (currentGameState === 'game-on') {
    context.clearRect(0, 0, canvas.width, canvas.height);
    generatingRightTrucks.forEach(function(truck) {
      truck.movRight()
      truck.draw(context)
    })

    generatingLeftCars.forEach(function(car) {
      car.movLeft()
      car.draw(context)
    })

    water.draw(context);
    newMvgObstacle.draw(context);
    safeLanding.draw(context);
    safeLanding2.draw(context);
    lillypad1.draw(context);
    lillypad2.draw(context);
    lillypad3.draw(context);
    lillypad4.draw(context);
    playerFrog.draw(context);

    collisionDetection();

  }
  requestAnimationFrame(gameloop);
})

generateRightTrucks();
generateLeftCar()

window.addEventListener('keydown', function(e) {
  playerFrog.move(e);
})


var startingPosition = playerFrog.y

function collisionDetection() {
// canvas edge coll
  if (playerFrog.x < 0)  {
    console.log('ouch left');
  }  else if (playerFrog.x + playerFrog.width > canvas.width) {
    console.log('ouch right');
  }  else if (playerFrog.y < 0) {
    console.log('no way!');
  }  else if (playerFrog.y + playerFrog.height > canvas.height) {
    playerFrog.y = startingPosition;
    console.log('bottomed out');
  }

// car coll
  else {
    carArray.forEach(function(car) {
      if (playerFrog.x < car.x + car.width &&
       playerFrog.x + playerFrog.width > car.x &&
       playerFrog.y < car.y + car.height &&
       playerFrog.height + playerFrog.y > car.y) {
        currentGameState = 'game-over';
      }
    })

    carArrayLeft.forEach(function(car) {
      if (playerFrog.x < car.x + car.width &&
       playerFrog.x + playerFrog.width > car.x &&
       playerFrog.y < car.y + car.height &&
       playerFrog.height + playerFrog.y > car.y) {
        currentGameState = 'game-over';
      }
    })
  }
}

// pseudo code
//
// on page load:
// be able to start new game or quit game
//
// if start new game is clicked
// - frog starts at bottom middle of canvas
// - first row of obstacles moving from right side to left, next
// row of obstacles moving from left to right, and rows keep alternating directions
// - set speed at which obstacles move
// - display how may lives player has in corner, start with 3 default
//
// once playing
// - frog moves incrementally on 'key down' (arrow keys)
// - 10 points every time frog moves forward
// - if frog is struck by any of the obstacles or falls in the water or hits the edge of the canvas
//  then frog dies and loses a life.
// - Add Sound to indicate when frog looses life/ and when it makes it to safety/Lillypad and earns points
