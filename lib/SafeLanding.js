function SafeLanding(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

SafeLanding.prototype.draw = function(context) {
  context.fillStyle = "rgba(255, 127, 0, 1)";
  context.fillRect(
    this.x,
    this.y,
    this.width,
    this.height);
}

module.exports = SafeLanding;
