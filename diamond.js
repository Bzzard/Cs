const stars = function(m) {
	let b = "";
	for(i=0; i<m; i++) {
		b = "*" + b;
};
	return b;
};

const space = function(k) {
	let b = "";
	for(i=0; i<k; i++) {
		b = " " + b;
};
	return b;
};

const diamond = function(h) {
	if (h%2 === 0) {
		h = h+1;
	};
	for(let i = 1; i<=h; i=i+2) {
		console.log(space((h-i)/2) + stars(i));
	}
	for(let i = h-2; i>=1; i=i-2) {
		console.log(space((h-i)/2)+ stars(i));
	};
};

diamond(9); 