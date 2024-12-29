//Singleton
//object.create

// object literals

const mySym = Symbol("Key1")

const Jsuser = {
    name : "Vedant",
    "Full name": "Vedant Narayan Mehar",
    [mySym] : "mykey1",
    age: 18,
    location: "Jaipur",
    email: "vedant@google.com",
    isLoggedIn : false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "vedant@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "vedant@microsoft.com"

// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS User");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(Jsuser.greetingTwo())

