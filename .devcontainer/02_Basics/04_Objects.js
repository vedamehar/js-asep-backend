//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123abc";
tinderUser.name = "Sammy";
tinderUser.isloggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        username: {
            firstname: "Vedant",
            lastname: "Mehar"
        }
    }

}

//console.log(regularUser.fullname.username.firstname);

const Obj1 = {1 : "a", 2 : "b"};
const Obj2 = {3 : "a", 4 : "b"};
const Obj4 = {5 : "a", 6 : "b"};

//const Obj3 = { Obj1, Obj2}
//const Obj3 = Object.assign({}, Obj1, Obj2, Obj4);

const Obj3 = {...Obj1,...Obj2,...Obj4}
// console.log(Obj3)

const users = [
    {
        id: "1",
        email : "v@gmail.com"
    },
    {
        id: "1",
        email : "v@gmail.com"
    },
    {
        id: "1",
        email : "v@gmail.com"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));
// console.log(Object());

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);
const {courseInstructor : instructer} = course
console.log(instructer);
//React.js
// const navbar = (props.company) => {

// }

// navbar(company = "vedant")

// {
//     "name":"Vedant",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]