const assert = require('chai').assert;
const Car = require('../lib/Car.js');

describe('Car', () => {
  context('with default attributes', () => {
    const car = new Car(0, 0, 40, 40, 3);

    it('car exists', () => {
      assert.instanceOf(car, Car);
    })
    it('should have move right function', () => {
      assert.isFunction(car.movRight)
    })
    it('should have move left function', () => {
      assert.isFunction(car.movLeft)
    })
    it('car moves', () => {
      car.movRight()
      assert.equal(car.x, 3)
    })
    it('check attributes', () => {
      assert.equal(car.x, 3);
      assert.equal(car.y, 0);
      assert.equal(car.width, 40);
      assert.equal(car.height, 40);
      assert.equal(car.pace, 3);
    })
  })
})
