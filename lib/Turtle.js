var MovingObstacle = require('./MovingObstacle.js');

class Turtle  extends MovingObstacle {
  constructor (x, y, width, height, pace) {
    super (x, y, width, height, pace);
  }

  // draw (context) {
  //   context.drawImage(turtleImg);
  // }

}

module.exports = Turtle;
