var Square = require('./Square.js');


class Lillypad extends Square {
  constructor (x, y, width, height, color = 'rgba(0, 255, 0, 1)', image) {
    super (x, y, width, height, color, image);
    this.image = image;
  }
}

module.exports = Lillypad;




// ===========================

// function Lillypad (x, y, width, height) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
// }
//
// Lillypad.prototype.draw = function(context) {
//   context.fillStyle = "rgba(0, 255, 0, 1)";
//   context.fillRect(
//     this.x,
//     this.y,
//     this.width,
//     this.height);
// }
