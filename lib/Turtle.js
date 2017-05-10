const MovingObstacle = require('./MovingObstacle.js');

class Turtle  extends MovingObstacle {
  constructor (x, y, width, height, pace, image) {
    super (x, y, width, height, pace);
    this.image = image;
  }
}

module.exports = Turtle;
