var Square = require('./Square.js');
var Board = require('./Board.js');
const MOVE_SOUND_URL = 'images/sound-frogger-hop.wav';


class Frog extends Square {
  constructor(x, y, width, height, color = 'rgba(0, 255, 0, 1)', pace) {
    super(x, y, width, height, color);
    this.lives = 3;
    this.image = 'images/froggy.png';
    this.winner = false;
    this.pace = pace;
    this.collide = false;
    this.turtleCollide = false;
  }

  move(e) {
    this.playSound(MOVE_SOUND_URL);

    if (e.keyCode === 38) {
      this.y -= 22.5;

    } else if (e.keyCode === 40) {
      this.y += 22.5;

    } else if (e.keyCode === 37) {
      this.x = this.x - 30;

    } else {
      this.x = this.x + 30;
    }
  }

  playSound(url) {
    if (typeof Audio !== "undefined") {
      var audio = new Audio(url);

      audio.play();
    }
  }

  collisionDetection(canvas, logArray, turtleArray, carArrayLeft, lillypadArray, truckArray, resetGame) {

    if (this.x < 0 || this.x + this.width > canvas.width || this.y < 0) {
      this.playSound('images/sound-frogger-squash.wav');
      resetGame();
    } else if (this.y + this.height > canvas.height) {
      this.playSound('images/sound-frogger-squash.wav');
      resetGame();

    } else {
      this.detectCollision([ ...carArrayLeft, ...truckArray ], resetGame);
      this.rideObjectLog(logArray, 'left');
      this.rideObjectTurtle(turtleArray, 'right');
      this.lillyCollide(lillypadArray);
      this.inWater(resetGame);
      this.inWater(turtleArray);
    }
  }

  detectCollision(array, resetGame) {
    var newScore = new Board(80, 570);

    array.forEach(function(item) {
      const {x, width, y, height, playSound} = this;

      if (x < item.x + item.width &&
          x + width > item.x &&
          y < item.y + item.height &&
          height + y > item.y) {

        newScore.points = 0;
        playSound('images/sound-frogger-squash.wav');
        resetGame();
      }
    }.bind(this));
  }

  waterCollision(resetGame) {
    console.log('water');
    resetGame()
  }


  inWater(resetGame) {
    if (this.x > 0  &&
 this.x < 900  &&
 this.y < 155  &&
 this.y > 0 && this.collide === false && this.turtleCollide === false && this.winner === false) {
      this.waterCollision(resetGame);
    }
  }

  rideObjectLog(array, direction) {
    let collide = false;

    for (var i = 0; i < array.length; i ++) {

      if (this.x < array[i].x + array[i].width &&
          this.x + this.width > array[i].x &&
          this.y < array[i].y + array[i].height &&
          this.height + this.y > array[i].y) {
        this.collide = true;
        if (direction === 'left') {
          this.pace = array[i].pace;
          collide = true;
          this.x -= this.pace;
        } else {
          collide = false
        }
      }
    }
    this.collide = collide;
  }

  rideObjectTurtle(array, direction) {
    let collide = false;

    for (var i = 0; i < array.length; i ++) {
      if (this.x < array[i].x + array[i].width &&
          this.x + this.width > array[i].x &&
          this.y < array[i].y + array[i].height &&
          this.height + this.y > array[i].y) {
        if (direction === 'right') {
          this.pace = array[i].pace;
          collide = true
          this.x += this.pace;
        } else {
          collide = false;
        }
      }
    }
    this.turtleCollide = collide;
  }

  lillyCollide(array) {
    let frog = this

    array.forEach(function(item) {
      if (frog.x < item.x + item.width &&
       frog.x + frog.width > item.x &&
       frog.y < item.y + item.height &&
       frog.height + frog.y > item.y) {
        frog.winner = true;
      }
    });
  }
}

module.exports = Frog;
