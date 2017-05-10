const assert = require('chai').assert;
const Turtle = require('../lib/Turtle.js');

describe('Turtle', () => {
  context('with default attributes', () => {
    let pace = 2;
    let x = 200
    const turtle = new Turtle(x, 65, 80, 30, pace);

    it('turtle exists', () => {
      assert.instanceOf(turtle, Turtle);
    })
    it('should have move right function', () => {
      assert.isFunction(turtle.movRight);
    })
    it('turtle moves', () => {
      turtle.movRight();
      assert.equal(turtle.x, 202)
    })
    it('check attributes', () => {
      assert.equal(turtle.x, 202);
      assert.equal(turtle.y, 65);
      assert.equal(turtle.width, 80);
      assert.equal(turtle.height, 30);
      assert.equal(turtle.pace, 2);
    })
  })
})
