//ZAD1
console.log('ZAD1.');

const first = 'Hello ';
const second = 'world!';
const text = `${first} ${second}`;

console.log(text);

//ZAD2
console.log('ZAD2');

const multiply = (a = 1, b = 1) => a * b;

console.log(multiply(4, 8));
console.log(multiply(3, 2));
console.log(multiply(9, 6));
console.log(multiply(6));


// ZAD3
console.log('ZAD3 - using forEach');

const average = (...args) => {
	let sum = 0;
	args.forEach(arg => sum += arg);
	return sum / args.length;
}

console.log(average(3, 5, 43, 7));
console.log(average(9, 3, 4, 9));

//OR

console.log('ZAD3 - using reduce');

const digitals = [];

digitals.push(parseFloat(prompt('Podaj pierwsza liczbe: ')));
digitals.push(parseFloat(prompt('Podaj druga liczbe: ')));
digitals.push(parseFloat(prompt('Podaj trzecia liczbe: ')));
digitals.push(parseFloat(prompt('Podaj czwarta liczbe: ')));


const avg = (...args) => args.reduce((accumulator, currenValue) => accumulator + currenValue) / args.length;
const result = avg(...digitals);

console.log(result);

//ZAD4
console.log('ZAD4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const [a, b, c, d, e, f, g, h, i] = grades;

console.log(average(a, b, c, d, e, f, g, h, i));

//ZAD5
console.log('ZAD5');

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [firstItem,  ,  ,  , lastItem] = array;

console.log(firstItem);
console.log(lastItem);