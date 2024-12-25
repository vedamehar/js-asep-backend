const score = 400
//console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.8966
// 23.8966 => 23.9 ROUNDOFF Upto 3
// 123.8966 => 124 ROUNDOFF Upto 3
// 1123.8966 => 1.12e+3 ROUNDOFF Upto 3

//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++ Maths ++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8,5));
// console.log(Math.max(4,3,6,8,5));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

