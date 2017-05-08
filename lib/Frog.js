var Square = require('./Square.js');
var Board = require('./Board.js');


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
      this.y = this.y + 25;
      audio.play();
    } else if (e.keyCode === 37) {
      this.x = this.x - 30;
      audio.play();
    } else {
      this.x = this.x + 30;
      audio.play();
    }
  }

  collisionDetection(canvas, logArray, turtleArray, carArrayLeft, truckArray, resetGame) {
    var audio = new Audio('images/sound-frogger-squash.wav');

    if (this.x < 0 || this.x + this.width > canvas.width || this.y < 0) {
      audio.play();
      resetGame();
    } else if (this.y + this.height > canvas.height) {
      audio.play();
      resetGame();

    } else {
      this.detectCollision(carArrayLeft, audio, resetGame);
      this.detectCollision(truckArray, audio, resetGame);
      this.rideObject(logArray, 'left');
      this.rideObject(turtleArray, 'right');
    }
  }

  detectCollision(array, audio, resetGame) {
    var newScore = new Board(80, 570);
    var frog = this;

    array.forEach(function(item) {
      if (frog.x < item.x + item.width &&
       frog.x + frog.width > item.x &&
       frog.y < item.y + item.height &&
       frog.height + frog.y > item.y) {
        newScore.points = 0;
        audio.play();
        resetGame();
      }
    });
  }

  rideObject(array, direction) {
    var frog = this;

    array.forEach(function(item) {
      if (frog.x < item.x + item.width &&
       frog.x + frog.width > item.x &&
       frog.y < item.y + item.height &&
       frog.height + frog.y > item.y) {
        console.log('obj');
        if (direction === 'left') {
          frog.x -= item.pace;
        } else {
          frog.x += item.pace;
        }
      } else {
        frog.waterCollision();
      }
    });
  }

  waterCollision() {
    var frog = this;

    if (frog.x > 0  &&
     frog.x < 900  &&
     frog.y < 230  &&
     frog.y > 0) {
      console.log('water');
    }
  }
}

module.exports = Frog;
