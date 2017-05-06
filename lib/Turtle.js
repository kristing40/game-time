var MovingObstacle = require('./MovingObstacle.js');

class Turtle  extends MovingObstacle {
  constructor (x, y, width, height, pace, image = 'images/turtle.png') {
    super (x, y, width, height, pace);
    this.image = image;
  }

}

module.exports = Turtle;
