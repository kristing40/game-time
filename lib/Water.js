const Square = require('./Square.js');

class Water extends Square {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.fillStyle = "rgba(24, 234, 255, 1)";
    context.fillRect(
     this.x,
     this.y,
     this.width,
     this.height);
  }
}

module.exports = Water;
