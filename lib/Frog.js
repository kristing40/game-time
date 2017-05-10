var Square = require('./Square.js');
var Board = require('./Board.js');

class Frog extends Square {
  constructor(x, y, width, height, color = 'rgba(0, 255, 0, 1)') {
    super(x, y, width, height, color);
    this.lives = 3;
    this.image = 'images/froggy.png';
    this.winner = false;
  }

  move(e) {
    var audio = new Audio('images/sound-frogger-hop.wav');

    if (e.keyCode === 38) {
      this.y -= 22.5;
      audio.play();
    } else if (e.keyCode === 40) {
      this.y += 22.5;
      audio.play();
    } else if (e.keyCode === 37) {
      this.x = this.x - 30;
      audio.play();
    } else {
      this.x = this.x + 30;
      audio.play();
    }
  }


  collisionDetection(canvas, logArray, turtleArray, carArrayLeft, lillypadArray, truckArray, resetGame) {
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

      // // if in water area, make sure frog is on object
      // if (this.y > water.height && this.y < water.y) {
        // this.rideObject(logArray, 'left');
        // this.rideObject(turtleArray, 'right');
      // }

      // if (inWaterArea()) {
      //   var transport = rideObject([ ...logArray, ...turtleArray ]); // return object turtle is riding
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


      this.rideObject(logArray, 'left');
      this.rideObject(turtleArray, 'right');
      this.lillyCollide(lillypadArray);
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

    for (var i = 0; i < array.length; i ++) {
      if (frog.x < array[i].x + array[i].width &&
          frog.x + frog.width > array[i].x &&
          frog.y < array[i].y + array[i].height &&
          frog.height + frog.y > array[i].y) {

        if (direction === 'left') {
          frog.x -= array[i].pace;
        } else {
          frog.x += array[i].pace;
        }
        return;
      }
    }

    frog.waterCollision();

    // array.forEach(function(item) {
    //   if (frog.x < item.x + item.width &&
    //    frog.x + frog.width > item.x &&
    //    frog.y < item.y + item.height &&
    //    frog.height + frog.y > item.y) {
    //     console.log('obj');
    //     if (direction === 'left') {
    //       frog.x -= item.pace;
    //     } else {
    //       frog.x += item.pace;
    //     }
    //   } else {
    //     frog.waterCollision();
    //   }
    // });
  }

  waterCollision() {
    var frog = this;

    if (frog.x > 0  &&
     frog.x < 900  &&
     frog.y < 155  &&
     frog.y > 0) {
      console.log('water');
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
