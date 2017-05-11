const assert = require('chai').assert;
const Water= require('../lib/Water.js');

describe('Water', () => {
  context('with default attributes', () => {
    const water = new Water(0, 0, 900, 155);

    it('water exists', () => {
      assert.instanceOf(water, Water);
    })

    it('should have a draw function', () => {
      assert.isFunction(water.draw);

    })
  })
})
