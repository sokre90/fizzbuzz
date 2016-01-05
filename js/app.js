$(document).ready(function() {
	// var numCount = 1
	$('#showfb').click(function() {
		$('ul').empty();
		var numCount = 1
	while (numCount <= 100) {
		if (numCount % 15 == 0) {
			$('ul').append('<li>FizzBuzz</li>');
		}
		else if (numCount % 3 == 0) {
			$('ul').append('<li>Fizz</li>');
		}
		else if (numCount % 5 == 0) {
			$('ul').append('<li>Buzz</li>');
		}
		else {
			$('ul').append('<li>'+numCount+'</li>');
		}
		numCount ++
	}
	})
	$('#hidefb').click(function() {
		$('ul').empty();
	})
})