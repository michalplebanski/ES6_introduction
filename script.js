//ZAD1
console.log('ZAD1');
const first = 'Hello ';
const second = 'world!';
const text = `${first} ${second}`;
console.log(text);

//ZAD2
console.log('ZAD2');
const multiply = (a = 1, b = 1) => console.log(`${a*b}`);
multiply(4,8);
multiply(3,2);
multiply(9,6);
multiply(6);

// ZAD3
console.log('ZAD3');
let sum = 0;
let length = 0;
const average = (...args) => {args.forEach(arg => sum += arg); return sum = sum/args.length};
average(2,4,6,8,1,3);
console.log(`${sum}`);

//ZAD4 
console.log('ZAD4');
sum = 0;
const grades = [1,5,5,5,4,3,3,2,1]
const [a,b,c,d,e,f,g,h,i] = grades;
console.log(average(a,b,c,d,e,f,g,h,i));

//ZAD5
console.log('ZAD5');
const array = [1,4,'Iwona',false,'Nowak'];
const [firstItem, , , ,lastItem] = array;
console.log(firstItem);
console.log(lastItem);