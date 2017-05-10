var MovingObstacle = require('./MovingObstacle.js');

class Truck extends MovingObstacle {
  constructor (x, y, width, height, pace, image) {
    super (x, y, width, height, pace, image);
    this.image = image;
  }
}

module.exports = Truck
