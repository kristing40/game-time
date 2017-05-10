
const assert = require('chai').assert;
const Truck = require('../lib/Truck.js');

describe('Truck', () => {
  context('with default attributes', () => {
   const truck = new Truck(0, 0, 40, 40, 3);

  it('truck exists', () => {
    assert.instanceOf(truck, Truck);
  })
  it('should have move right function', () => {
    assert.isFunction(truck.movRight);
  })
  it('truck moves', () => {
    truck.movRight();
    assert.equal(truck.x, 3)
  })
  it('check attributes', () => {
    assert.equal(truck.x, 3);
    assert.equal(truck.y, 0);
    assert.equal(truck.width, 40);
    assert.equal(truck.height, 40);
    assert.equal(truck.pace, 3);
  })
  })

})
