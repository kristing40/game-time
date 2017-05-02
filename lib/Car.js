function Car(x, y, width, height, dir, pace) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.dir = dir;
  this.pace = pace;
}

Car.prototype.draw = function(context) {
  context.fillStyle = "rgba(0, 0, 255, 1)";
  context.fillRect(
    this.x,
    this.y,
    this.width,
    this.height);
}

// Car.prototype.direction = function(dir) {
//   if (dir === 1) {
//     Car.movRight();
//   }
// }

Car.prototype.movRight = function(dir, pace) {
  // var velX = .2;
  // this.dir * this.pace;


  // this.x = this.x + velX;
  this.x++;
}

module.exports = Car;
