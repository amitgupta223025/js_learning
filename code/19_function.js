// functions 
function userName(a,b){
    console.log("hello");
    console.log(a+b);

}
userName(2,3)

function loginUser(username){
    return `${username}jsut login`
}


console.log(loginUser("amit"));


function loginUser1(username){
    if(username === undefined){
        console.log("please enter username");
        return 
    }
    return `${username}just login`
}


console.log(loginUser1("amit")); //output amit
console.log(loginUser1()); //output undefined for this assing somme defalut values in function like(username ="sam")

//lecture20

function calculatePrice(...num1){   //'...' is act as rest operator here
    return num1
}
console.log(calculatePrice(200, 400,123 ,1233 ))
function calculatePrice2(val1,val2,...num1){   // val use to skip values
}
console.log(calculatePrice2(200, 400,123 ,1233 ))

const user = {
    username : "amit",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    username :"amit gupta",
    price: 399
})

//getarray operator

const myArr =[200,2123,31]
function returnSecValue(getArray){
    return getArray[1]
}
console.log(returnSecValue(myArr));
console.log(returnSecValue([200,23,324,243]));


