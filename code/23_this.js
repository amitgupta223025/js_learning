//this function

const user ={
    username: "amit",
    price: 990,

    welcomeMess: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);  //this function use to gett current contect of user
    }
}

user.welcomeMess()
user.username="sam"
user.welcomeMess()



const chai = function(){
    let username ="hitesh"
    console.log(this.username);  //output is undefined
}
const chai2 = () =>{
    let username ="hitesh"
    console.log(this.username); //output is undefined
    console.log(this); //output is {}
}
chai()
chai2()

//arrow function   syntax,  ()=>{}

const addtwo = (num1,num2) =>{
    return num1+num2
}
console.log(addtwo(3,3))
//or
const addtwo1 = (num1,num2) => (num1+num2)

console.log(addtwo1(3,3))

// so if u useing {} paratensis then return value is must but if not useing {} then no re=quired to return any any vakue 
