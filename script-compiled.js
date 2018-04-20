'use strict';

//ZAD1
console.log('ZAD1');

var first = 'Hello ';
var second = 'world!';
var text = first + ' ' + second;

console.log(text);

//ZAD2
console.log('ZAD2');

var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};

console.log('' + multiply(4, 8));
console.log('' + multiply(3, 2));
console.log('' + multiply(9, 6));
console.log('' + multiply(6));

// ZAD3
console.log('ZAD3 - using forEach');

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		return sum += arg;
	});
	return sum / args.length;
};

console.log(average(3, 5, 43, 7));
console.log(average(9, 3, 4, 9));

//OR

console.log('ZAD3 - using reduce');

var digitals = [1, 5, 8, 9];
var result = digitals.reduce(function (accumulator, currenValue) {
	return accumulator + currenValue;
}) / digitals.length;
console.log(result);

//ZAD4 
console.log('ZAD4');

sum = 0;
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var a = grades[0],
    b = grades[1],
    c = grades[2],
    d = grades[3],
    e = grades[4],
    f = grades[5],
    g = grades[6],
    h = grades[7],
    i = grades[8];


console.log(average(a, b, c, d, e, f, g, h, i));

//ZAD5
console.log('ZAD5');

var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstItem = array[0],
    lastItem = array[4];


console.log(firstItem);
console.log(lastItem);
