const assert = require('chai').assert;
const Lillypad = require('../lib/Lillypad.js');

describe('Lillypad', () => {
  it('lillypad exists', () => {
    const lillypad = new Lillypad(30, 25, 45, 30);

    assert.instanceOf(lillypad, Lillypad);
  })
})
