console.log('hello');

const square = function(x) {
	return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(10));

// const getFirstName = (name) => {
// 	return name.split(' ')[0];
// }
const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Chriiss Banning'));