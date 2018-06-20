'use strict';

// FIRST TASK
var firstVar = 'Hello';
var secondVar = 'World';
var connected = firstVar + ' ' + secondVar;
console.log(connected);

// SECOND TASK
var multiply = function multiply() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return console.log(x * y);
};

multiply(5, 4);
multiply(4);

// THIRD TASK

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		return sum = sum + arg;
	});
	console.log(sum / args.length);
};

average(5, 5);

// FOURTH TASK

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

// FIFTH TASK

var weirdObject = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = weirdObject[2],
    lastName = weirdObject[4];


console.log(firstName);
console.log(lastName);
