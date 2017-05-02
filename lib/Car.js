function Car(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  // this.dir = dir;
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
//
// Car.prototype.movRight = function() {
//   this.x += this.x + 1;
// }

module.exports = Car;
