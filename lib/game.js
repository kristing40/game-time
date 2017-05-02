var Frog = require('./Frog.js');
var Car = require('./Cars.js');
var Log = require('./Logs.js');
var Turtle = require('./Turtles.js');
var Board = require('./Board.js');
var Square = require('./Squares.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


// pseudo code
//
// on page load:
// be able to start new game or quit game
//
// if start new game is clicked
// - frog starts at bottom middle of canvas
// - first row of obstacles moving from right side to left, next
// row of obstacles moving from left to right, and rows keep alternating directions
// -display how may lives player has in corner, start with 3 default
//
// once playing
// - 10 points every time frog moves forward
// - if frog is struck by any of the obstacles or falls in the water or hits the edge of the canvas
//  then frog dies and loses a life.