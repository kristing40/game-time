var Frog = require('./Frog.js');
var Car = require('./Car.js');
var Water = require('./Water.js');
var SafeLanding = require('./SafeLanding.js');
var Lillypad = require('./Lillypad.js');
var Log = require('./Log.js');
var Turtle = require('./Turtle.js');
var Lillypad = require('./Lillypad.js');
var Board = require('./Board.js');
var Square = require('./Square.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var playerFrog = new Frog(420, 480, 40, 40);
var newCar = new Car(0, 480, 80, 30, 3);
var water = new Water(0, 0, 900, 250);
var safeLanding = new SafeLanding(0, 230, 900, 40);
var safeLanding2 = new SafeLanding(0, 480, 900, 40);
var lillypad1 = new Lillypad(140, 0, 30, 30);
var lillypad2 = new Lillypad(340, 0, 30, 30);
var lillypad3 = new Lillypad(540, 0, 30, 30);
var lillypad4 = new Lillypad(740, 0, 30, 30);
var carArray = [];
var numCars = 3;

for (var i = 0; i < numCars; i++) {
  carArray.push(newCar);
  newCar.draw(context);
}

playerFrog.draw(context);
safeLanding.draw(context);
safeLanding2.draw(context);
water.draw(context);
lillypad1.draw(context);
lillypad2.draw(context);
lillypad3.draw(context);
lillypad4.draw(context);

requestAnimationFrame(function gameloop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  water.draw(context);
  newCar.draw(context);
  safeLanding.draw(context);
  safeLanding2.draw(context);
  lillypad1.draw(context);
  lillypad2.draw(context);
  lillypad3.draw(context);
  lillypad4.draw(context);
  playerFrog.draw(context);


  for (var i = 0; i < carArray.length; i++) {

    let c = carArray[i];

    c.movRight();
    c.draw(context);
  }

  requestAnimationFrame(gameloop);
})

window.addEventListener('keydown', function(e) {
  playerFrog.move(e);
})


// pseudo code
//
// on page load:
// be able to start new game or quit game
// if start new game is clicked
// - display how may lives player has in corner, start with 3 default
//
// once playing

// - 10 points every time frog moves forward
// - if frog is struck by any of the obstacles or falls in the water or hits the edge of the canvas
//  then frog dies and loses a life.
// - Add Sound to indicate when frog looses life/ and when it makes it to safety/Lillypad and earns points
