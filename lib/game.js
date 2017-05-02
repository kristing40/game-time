var Frog = require('./Frog.js');
var Car = require('./Cars.js');
var Log = require('./Logs.js');
var Turtle = require('./Turtles.js');
var Lillypad = require('./Lillypads.js');
var Board = require('./Board.js');
var Square = require('./Squares.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var playerFrog = new Frog(450, 560, 40, 40);

playerFrog.draw(context);




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
