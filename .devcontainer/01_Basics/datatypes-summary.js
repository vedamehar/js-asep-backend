// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

//const bigNumber = 345654357665435674n


// Reference (Non-primitive)

// Array, Object, Functions


const heros = ["Shaktiman","Naagraj","Doga"]
let myObj = {
   name: "vedant",
   age: 20,
}

const myFunction = function() {
   // console.log("Hello World");
}

//console.log(typeof outsideTemp);

// http://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap (Non-Primitive)

let myYoutubename = "vedantmehardotcom"

let anothername = myYoutubename
anothername = "Chai aur code"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email :"user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "vedant@google.com"

console.log(userOne.email);
console.log(userTwo.email);
