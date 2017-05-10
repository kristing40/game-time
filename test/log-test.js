const assert = require('chai').assert;
const Log = require('../lib/Log.js');


describe('Log', () => {
  context('with default attributes', () => {
    const log = new Log(900, 110, 85, 30, 2);

    it('log exists', () => {
      assert.instanceOf(log, Log);
    })

    it ('should have a move left function', () => {
      assert.isFunction(log.movLeft)
    })
  })
})
