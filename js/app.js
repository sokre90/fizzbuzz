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
		$('p').hide();
		var numCount = 1;
		$('ul').empty();
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
			numCount ++
		}
	})
})			
	