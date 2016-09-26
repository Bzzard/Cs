	const count = function(number) {
		if(number === 0) {
			return 1;
		}
			return number * count(number-1);
		}

	const factorial = function(number) {
		console.log(count(number));
	}

	factorial(3);