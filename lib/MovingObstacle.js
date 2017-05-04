var Square = require('./Square.js');

class MovingObstacle extends Square {
  constructor (x, y, width, height, pace, color) {
    super (x, y, width, height, color);
    this.pace = pace;
    this.color = 'rgba(0, 0, 255, 1)';
  }

  movRight() {
    this.x += this.pace;
    if (this.x > 900) {
      this.x = 0;
    }
  }

  movLeft() {
    this.x -= this.pace;
    if (this.x < 0) {
      this.x = 900;
    }
  }
}

module.exports = MovingObstacle;
