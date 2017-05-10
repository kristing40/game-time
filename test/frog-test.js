const assert = require('chai').assert;
const Frog = require('../lib/Frog.js');
// const audio = new Audio('images/sound-frogger-squash.wav')



xdescribe('Frog', () => {
  context('with default attributes', () => {
   const frog = new Frog(0, 0, 40, 40);
  //  console.log(audio);
   it('should be able to move up', () => {
     frog.move({keyCode: 38})
     assert.equal(frog.y, -22.5)
   })
   it('should be able to move down', () => {
     frog.move({keyCode: 40})
     assert.equal(frog.y, 0)
   })
   it('should be able to move right', () => {
     frog.move({keyCode: 37})
     assert.equal(frog.x, -30)
   })
   it('should be able to move left', () => {
     frog.move({keyCode: 30})
     assert.equal(frog.x, 0);
     frog.move({keyCode: 30})
     assert.equal(frog.x, 30)
   })
 })
})
