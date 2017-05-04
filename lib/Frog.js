var Square = require('./Square.js');

class Frog extends Square {
  constructor (x, y, width, height, color = 'rgba(0, 255, 0, 1)') {
    super (x, y, width, height, color);
  }


  move(e) {
    if (e.keyCode === 38) {
      this.y = this.y - 25;
    } else if (e.keyCode === 40) {
      this.y = this.y + 25
    } else if (e.keyCode === 37) {
      this.x = this.x - 30
    } else {
      this.x = this.x + 30
    }
  }
}

module.exports = Frog;
