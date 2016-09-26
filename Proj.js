const space = function(spaceNumber) {
	if(spaceNumber === 0){
		return "";
	}
		return " " + space(spaceNumber - 1);
};

const stars = function(starNumber) {
	if(starNumber === 0) {
		return "";
	}
		return "*" + stars(starNumber - 1);
};

const core = function(spaceNumber, starNumber, n) {
	if(n === 0) {
		return "";
	}
		console.log(space(spaceNumber) + stars(starNumber));
		core(spaceNumber - 1, starNumber + 2, n - 1);
};

const triangleStar = function(n) {
	core(n-1, 1, n);
};
	
triangleStar(5);