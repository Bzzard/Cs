const reverse = function(arr) {
	let newarray = [];
	let a = 0;
	for(let i = arr.length-1; i>=0; i=i-1) {
		newarray[a] = arr[i];
		a=a+1;
	}
	return newarray;
}

	const reversedArray = reverse([2, 4, 6, 8, 10]);
	console.log(reversedArray);