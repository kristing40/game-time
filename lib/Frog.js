function Frog(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Frog.prototype.draw = function(context) {
  context.fillStyle = "rgba(0, 255, 0, 1)";
  context.fillRect(
    this.x,
    this.y,
    this.width,
    this.height);
}

Frog.prototype.move = function(e) {
  if (e.keyCode === 38) {
    this.y = this.y - 50;
  } else if (e.keyCode === 40) {
    this.y = this.y + 50
  } else if (e.keyCode === 37) {
    this.x = this.x - 50
  } else {
    this.x = this.x + 50
  }
}






module.exports = Frog;
