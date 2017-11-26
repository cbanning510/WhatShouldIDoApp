console.log('arrows2');

// const add = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// }

// const user = {
// 		name: 'Andrew',
// 		cities: ['Philly', 'NYC', 'Dublin'],
// 		printPlacesLived: function() {
// 			console.log(this.name);
// 			console.log(this.cities);
// 		}
// 	}


var user = {
	name: 'Andrew',
	cities: ['Philly', 'NYC', 'Dublin'],
	printPlacesLived () {
		return this.cities.map((city) => this.name + ' has lived in ' +  city);
		return cityMessages;
	}
};

console.log(user.printPlacesLived());

const multiplier = {
	numbers: [10, 20, 30],
	multiplyBy: 3,
	multiply () {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
}

console.log(multiplier.multiply());

