class Square {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height);
  }

  drawImage(context) {
    let image = new Image();
    
    image.src = this.image
    context.drawImage(image,
      this.x,
      this.y,
      this.width,
      this.height);
  }
}
module.exports = Square;
