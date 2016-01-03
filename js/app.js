var numCount = 1
while (numCount < 100) {
	if (numCount % 15 == 0) {
		console.log('FizzBuzz');
	}
	else if (numCount % 3 == 0) {
		console.log('Fizz');
	}
	else if (numCount % 5 == 0) {
		console.log('Buzz');
	}
	else {
		console.log(numCount);
	}
	numCount ++
}


// $(document).ready(function() {
// 	$('button').click(function() {
		
// 	})
// })