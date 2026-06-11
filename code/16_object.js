const JSuser ={name: "Amit", age: 25, 
    "full name": "Amit Kumar Gupta",
    //[mysymbol]: "amit123",
    location: "India",
    email: "amit@example.com",
    lastLogin: ["monday", "tuesday", "wednesday"],
    isLoggedIn: true}

console.log(JSuser.name) // Output: Amit
console.log(JSuser["full name"]) // Output: Amit Kumar Gupta    

JSuser.name = "Amit Gupta"
console.log(JSuser.name) // Output: Amit Gupta

//Object.freeze(JSuser) // freeze prevents any changes to the object
JSuser.name = "Amit" // This will not change the name property of the object
console.log(JSuser.name) // Output: Amit Gupta


//greeting object
JSuser.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
JSuser.greeting(); // Output: Hello, my name is Amit Gupta and I am 25 years old.
    

const tinderuser = {
    name: "Amit",
    age: 25,
    location: "India",
    email: "amit@example.com"
}
console.log(tinderuser) // Output: {name: "Amit", age: 25, location: "India", email: "

console.log(Object.keys(tinderuser)) // Output: ["name", "age", "location", "email"]
console.log(Object.values(tinderuser)) // Output: ["Amit", 25, "India", "
console.log(Object.entries(tinderuser)) // Output: [["name", "Amit"], ["age", 25], ["location", "India"], ["email", "

console.log(Object.hasOwn(tinderuser, "name")) // Output: true
console.log(Object.hasOwnProperty(tinderuser, "name")) // Output: false
console.log(tinderuser.hasOwnProperty("name")) // Output: true



//lect17

const regularUser = {
    name: "Amit",
    fullName: {
        username: {
            firstName: "Amit",
            lastName: "Gupta"
        }
    }
}
console.log(regularUser.fullName.username.firstName) // Output: Amit

//assign operator
const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}
const mergedObj = Object.assign({}, obj1, obj2) // Object.assign() is used to merge two or more objects into a single object. It takes a target object and one or more source objects as arguments and copies the properties from the source objects to the target object.
console.log(mergedObj) // Output: {a: 1, b: 2, c: 3, d: 4}




//lect18
//object destructuring

const course = {
    name: "JavaScript",
    duration: "3 months",
    instructor: "John Doe"
}

course.courseinstructor // Output: undefined


// Destructuring the course object
const {name, duration, instructor : courseInstructor} = course; // The instructor property is renamed to courseInstructor using the syntax instructor : courseInstructor
console.log(name); // Output: JavaScript
console.log(duration); // Output: 3 months
console.log(courseInstructor); // Output: John Doe


