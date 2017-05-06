var MovingObstacle = require('./MovingObstacle.js');

class Log extends MovingObstacle {
  constructor (x, y, width, height, pace, image = 'images/log.jpg') {
    super (x, y, width, height, pace);
    this.image = image;
  }
}

module.exports = Log;
