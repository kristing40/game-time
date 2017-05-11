const assert = require('chai').assert;
const Square = require('../lib/Square.js');
const expect = require('chai').expect;

describe('Square', () => {
  context('with default attributes', () => {
    const square = new Square(10, 10, 10, 10, color, image);

    assert(true);
    expect(square.x).to.equal(10);
    expect(square.y).to.equal(10);
    expect(square.width).to.equal(10);
    expect(square.height).to.equal(10);
    expect(square.color).to.equal('rgba(0, 255, 0, 1)');
    expect(square.image).to.equal('images/car.png')
  })
})
