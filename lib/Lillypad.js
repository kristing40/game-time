const Square = require('./Square.js');


class Lillypad extends Square {
  constructor (x, y, width, height, color = 'rgba(0, 255, 0, 1)', image) {
    super (x, y, width, height, color, image);
    this.image = image;
  }
}

module.exports = Lillypad;
