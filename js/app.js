$(document).ready(function() {
	$('input').keyup(function() {
		value = $(this).val();
		numCheck = isNaN(value);
		if (numCheck == false) {
			$('p').text(value);
		}
		else if (numCheck == true) {
			$('p').text("Enter again, please!");
		}
	})

	$('#showfb').click(function() {
		var numCount = 1;
		while (numCount <= value) {
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
		}
		numCount ++
	})			
})
// $(document).ready(function() {
// $('#showfb').click(function() {
	// 	$('ul').empty();
	// 	var numCount = 1
	// while (numCount <= 100) {
	// 	if (numCount % 15 == 0) {
	// 		$('ul').append('<li>FizzBuzz</li>');
	// 	}
	// 	else if (numCount % 3 == 0) {
	// 		$('ul').append('<li>Fizz</li>');
	// 	}
	// 	else if (numCount % 5 == 0) {
	// 		$('ul').append('<li>Buzz</li>');
	// 	}
	// 	else {
	// 		$('ul').append('<li>'+numCount+'</li>');
	// 	}
	// 	numCount ++
	// }
	// })
	// $('#hidefb').click(function() {
	// 	$('ul').empty();
	// })