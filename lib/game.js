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
var carArrayLeft = []
// var newCar = new Car(0, 430, 80, 20, 3);
var newCar2 = new Car(200, 430, 80, 20, 3);
var newCar3 = new Car(400, 430, 80, 20, 3);
var newCar4 = new Car(600, 430, 80, 20, 3);
var newCar5 = new Car(900, 300, 80, 20, 3);
var newCar6 = new Car(700, 300, 80, 20, 3);
var newCar7 = new Car(400, 300, 80, 20, 3);
var newCar8 = new Car(0, 300, 80, 20, 3);


carArray.push(newCar, newCar2, newCar3, newCar4);
carArrayLeft.push(newCar5, newCar6, newCar7);

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
  carArray.forEach(function(car) {
    car.movRight()
    car.draw(context)
  })

  carArrayLeft.forEach(function(car) {
    car.movLeft()
    car.draw(context)
  })

  water.draw(context);
  newCar.draw(context);
  safeLanding.draw(context);
  safeLanding2.draw(context);
  lillypad1.draw(context);
  lillypad2.draw(context);
  lillypad3.draw(context);
  lillypad4.draw(context);
  playerFrog.draw(context);

  requestAnimationFrame(gameloop);
})

window.addEventListener('keydown', function(e) {
  playerFrog.move(e);
})

window.addEventListener('keydown', function(e) {
  playerFrog.move(e);
});

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
