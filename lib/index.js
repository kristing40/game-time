require('./game.js');
require('./style.css');

$('#startButton').on('click', function(e) {
  e.preventDefault();
  $('#game').show();
  $('#startButton').hide();
  $('#logo').hide();
});
