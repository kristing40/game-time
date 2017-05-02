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

Frog.prototype.move = function() {
  this.x++;
  this.y++;
}

module.exports = Frog;
