var MovingObstacle = require('./MovingObstacle.js');

class Turtle  extends MovingObstacle {
  constructor (x, y, width, height, pace) {
    super (x, y, width, height, pace);
  }

}

module.exports = Turtle;
