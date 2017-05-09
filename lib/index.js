require('./game.js');
require('./style.css');

$('#startButton').on('click', function(e) {
  e.preventDefault();
  $('#game').show();
  $('#startButton').hide();
  $('#logo').hide();
  $('#easyGame').hide();
  $('#hardGame').hide();
});

$('#easyGame').on('click', function(e) {
  e.preventDefault();
  $('#game').show();
  $('#startButton').hide();
  $('#logo').hide();
  $('#easyGame').hide();
  $('#hardGame').hide();
});

$('#hardGame').on('click', function(e) {
  e.preventDefault();
  $('#game').show();
  $('#startButton').hide();
  $('#logo').hide();
  $('#easyGame').hide();
  $('#hardGame').hide();
});
