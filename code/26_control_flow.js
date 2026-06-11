// if statement

if(true){
    console.log("amit")
}

const balance = 1000

if (balance==1000) console.log("test"),
console.log("test2");   //not a good method


if (balance<500) {
    console.log("less then 500")
}else if (balance<750){

}else {
    console.log("less then 1000")
}

//for multiple cond
const logIn1 = true
const logIn2 = true
const logIn3 = true
const logIn4 = true

if (logIn1 && logIn2 && 2==3) {  //&& --> every must be true
    console.log("less then 500")
}

if (logIn1 || logIn2 || 2==3) {  //any one true
    console.log("less then 500")
}


//switch  statment

const month=3
switch (month){
    case 1:
        console.log("jan");
        break;
    
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        break;
}        

//nullish coalescing operator(??) :null , undefined 
val1=5??10
val1=null ??10
val1=undefined ??10
val1=undefined ??10 ?? 20


console.log(val1)

//terniary operator

//syntax  condition ? statement on true :statement on false
const ice=100
ice <=80 ? console.log("less then 80") : console.log("greater then 80") //as condition is false ,false statement willl be executed

