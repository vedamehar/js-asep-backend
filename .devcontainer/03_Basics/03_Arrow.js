const user = {
    username :"vedant",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        //console.log(this);
        
    }
}

// user.WelcomeMessage()
// user.username = "Sam"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Vedant"
//     console.log(this.username); 
// }

// chai()
// const chai = function (){
//     let username = "Vedant"
//     console.log(this.username); 
// }

// chai()
const chai =  () => {
    let username = "Vedant"
    // console.log(this); 
}

chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>  num1 + num2

//const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) => ({username :"vedant"})

console.log(addTwo(4,3));

// const myArray = [2,3,5,7,8]

// myArray.forEach()