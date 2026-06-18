let myName = 'amit   '

console.log(myName.length);
console.log(myName.trim().length);

let myHeros = ['thor','spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Amit = function(){
    console.log(`amit is present in all objects`)
}

Array.prototype.heyAmit = function(){
    console.log(`amit says hello `)
}

// heroPower.hitesh()
myHeros.Amit()
myHeros.heyAmit()
// heroPower.heyAmit()

//inheritance

const User ={
    name:'amit',
    email:'examole@.com'
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport ={
    makeAssingment: 'js assingment',
    fullyTime: true,
    __proto__: TeachingSupport   //proto use to link and use all properties of tachingsupport, we can also assing it outside function
}

Teacher.__proto__= User
//or modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = 'helloamit    '
String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUsername.trueLength()
'amit'.trueLength()  //amit will to 'this' keyword 
'iceTea'.trueLength() //icetea will to 'this' keyword 