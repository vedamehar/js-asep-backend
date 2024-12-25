const name = "Vedant";
const repoCount = 50;

// console.log(name + repoCount + " Value");

//console.log(`Hello My name is ${name} and my repoCount is ${repoCount}.`);

const gamename = new String('vedant-vnm-com')

// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename);

// console.log(gamename.length)
// console.log(gamename.toUpperCase())
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString = gamename.substring(0,4);
console.log(newString);

const anotherstring = gamename.slice(-8,4);
console.log(anotherstring);

const newStringOne = "  Vedant  ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://vedant.com/vedant%20mehar"
console.log(url.replace('%20','-'))
console.log(url.includes('Aniket'));

console.log(gamename.split('-'));
