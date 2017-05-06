var Square = require('./Square.js');

class Frog extends Square {
  constructor(x, y, width, height, color = 'rgba(0, 255, 0, 1)') {
    super(x, y, width, height, color);
    this.lives = 3;
    this.image = 'images/froggy.png'
  }

  move(e) {
    var audio = new Audio('images/sound-frogger-hop.wav');
    if (e.keyCode === 38) {
      this.y = this.y - 25;
      audio.play();
    } else if (e.keyCode === 40) {
      this.y = this.y + 25
      audio.play();
    } else if (e.keyCode === 37) {
      this.x = this.x - 30
      audio.play();
    } else {
      this.x = this.x + 30
      audio.play();
    }
  }
}



module.exports = Frog;
