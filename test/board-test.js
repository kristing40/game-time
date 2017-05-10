const assert = require('chai').assert;
const Board = require('../lib/Board.js');

describe('Board', () => {
  context('with default attributes', () => {
    const board = new Board(80, 570);

    it('board exists', () => {
      assert.instanceOf(board, Board);
    })
    it('has default of 0 points', () => {
      assert.equal(board.points, 0);
    })
  })
})
