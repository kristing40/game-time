const Square = require('./Square.js');


class SafeLanding extends Square {
  constructor (x, y, width, height, color = 'rgba(255, 127, 0, 1)') {
    super (x, y, width, height, color);
  }
}

module.exports = SafeLanding;
