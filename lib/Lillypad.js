function Lillypad (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Lillypad.prototype.draw = function(context) {
  context.fillStyle = "rgba(0, 255, 0, 1)";
  context.fillRect(
    this.x,
    this.y,
    this.width,
    this.height);
}

module.exports = Lillypad;




// ===========================

// class Lillypad {
//   constructor (x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//   }
//   draw (context) {
//     context.fillStyle = "rgba(0, 255, 0, 1)";
//     context.fillRect(
//       this.x,
//       this.y,
//       this.width,
//       this.height);
//   }
// }
