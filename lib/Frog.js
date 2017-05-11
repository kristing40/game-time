var Square = require('./Square.js');
var Board = require('./Board.js');
const MOVE_SOUND_URL = 'images/sound-frogger-hop.wav';

class Frog extends Square {
  constructor(x, y, width, height, color = 'rgba(0, 255, 0, 1)') {
    super(x, y, width, height, color);
    this.lives = 3;
    this.image = 'images/froggy.png';
    this.winner = false;
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
      // this.detectCollision(truckArray, resetGame);

      // // if in water area, make sure frog is on object
      // if (this.y > water.height && this.y < water.y) {
        // this.rideObject(logArray, 'left');
        // this.rideObject(turtleArray, 'right');
      // }

  //     if (this.inWaterArea()) {
  //       var transportLog = this.rideObject([logArray]);
  //       var transportTurtle = this.rideObject([turtleArray])
  //       var frog = this;
  //     for (var i = 0; i < this.array.length; i++) {
  //       if (transportLog) {
  //         frog.x -= this.array[i].pace;
  //       }  else {
  //         frog.waterCollision(logArray);
  //       }
  //     }
  //     for (var j = 0; j < this.array.length; j++) {
  //       if (transportTurtle) {
  //         frog.x += this.array[j].pace;
  //       } else {
  //         frog.waterCollision(logArray);
  //       }
  //     }
  // }

      // if (inWaterArea()) {
      //   var transport = ridingObject([ ...logArray, ...turtleArray ]); // return object turtle is riding
      //   if (transport) {
      //     move frog with transport object
      //   } else {
      //     frog.waterCollision()
      //   }
      //
      // }

      // if (inWaterArea()) {
      //   this.rideObjects(allWaterObjectsArray)  // this.frog.x += allWaterObjectsArray[0].pace
      // }


      this.inWater(logArray);

      this.rideObject(logArray, 'left');
      this.rideObject(turtleArray, 'right');
      this.lillyCollide(lillypadArray);
    }
}

  detectCollision(array, resetGame) {
    var newScore = new Board(80, 570);
    // var collision = false;

    array.forEach(function(item) {
      const {x, width, y, height, playSound} = this;

      if (x < item.x + item.width &&
          x + width > item.x &&
          y < item.y + item.height &&
          height + y > item.y) {

        newScore.points = 0;
        playSound('images/sound-frogger-squash.wav');
        resetGame();
        // collision = true;
      }
    }.bind(this));

    // return collision;
  }

  waterCollision() {
      // var frog = this;
    console.log('water');
  }

  inWater(array) {
    var frog = this;

    if (
    frog.x > 0  &&
    frog.x < 900  &&
    frog.y < 155  &&
    frog.y > 0) {
      // && !this.rideObject(array, 'left')
      // frog.waterCollision();
      console.log(true);
    // if (!this.rideObject(array, 'left')) {
    //   frog.waterCollision();
    // }
    }
  }


  rideObject(array, direction) {
    var frog = this;

    for (var i = 0; i < array.length; i ++) {
      if (frog.x < array[i].x + array[i].width &&
          frog.x + frog.width > array[i].x &&
          frog.y < array[i].y + array[i].height &&
          frog.height + frog.y > array[i].y) {
          // console.log('obj');
        if (direction === 'left') {
          frog.x -= array[i].pace;
        } else {
          frog.x += array[i].pace;
        }
        // return true;
      }
    }
  }

lillyCollide(array) {
    var frog = this

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
