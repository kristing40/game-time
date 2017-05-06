var MovingObstacle = require('./MovingObstacle.js');

class Log extends MovingObstacle {
  constructor (x, y, width, height, pace) {
    super (x, y, width, height, pace);
    this.image = './images/log.svg';
  }
}

module.exports = Log;
