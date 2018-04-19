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
  return console.log('' + a * b);
};
multiply(4, 8);
multiply(3, 2);
multiply(9, 6);
multiply(6);

// ZAD3
console.log('ZAD3');
var sum = 0;
var length = 0;
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    return sum += arg;
  });return sum = sum / args.length;
};
average(2, 4, 6, 8, 1, 3);
console.log('' + sum);

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
