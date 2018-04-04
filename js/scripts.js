$(function() {
  var myArray = [];

  var pingPong = function(number) {

    for (var x = 1; x <= number; x++) {
      if (x % 3 == 0 && x % 5 == 0) {
        myArray.push('pingpong');
      } else if (x % 3 == 0) {
        myArray.push('ping');
      } else if (x % 5 == 0) {
        myArray.push('pong');
      } else {
        myArray.push(x);
      };

    };

  };
  console.log(myArray);
  $('form').submit(function(event) {
    event.preventDefault();

    var num = parseInt($('#myinput').val());
    pingPong(num);
    myArray.forEach(function(i) {
      $('ul').append($('<li>').html(i));
    });

  });

});