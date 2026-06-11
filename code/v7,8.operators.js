//**********************operators **********************/

//arithmetic operators

console.log(5 + 10);
console.log(5 - 10);
console.log(5 * 10);
console.log(5 / 10);
console.log(5 % 10);
console.log(5 ** 10);

//string operators
console.log("amit" + " kumar");
console.log("amit" + 5);
console.log(5 + " amit");
let a="hello";  
let b="world";
console.log(a + " " + b);
let c = a + " " + b;
console.log(c);

//no.+string

console.log(5 + "10");
console.log("5" + 10+21);
console.log(5 + 10 + "21");

//boolean operators
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false); //false is dominant in && operator

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);//true is dominant in || operator

console.log(!true);
console.log(!false); //! operator is used to reverse the boolean value

console.log(+true);
console.log(+false);
console.log(-true);
console.log(-false);//+ operator converts boolean to number and - operator also converts boolean to number but changes the sign

console.log(+""); //+ operator converts empty string to 0
console.log(-""); //- operator converts empty string to 0 with negative sign


//comparison operators


//console.log(5 == 5);
//console.log(5 == "5");
//console.log(5 === "5");//== operator compares value and === operator compares value and type

//console.log(null == undefined); //null and undefined are equal when using == but not when using === 
//console.log(null === undefined);

console.log(null>0); //null is considered as 0 in comparison
console.log(null==0); //null is considered as 0 in comparison so value is equal but type is not equal so output is false
console.log(null>=0); //null is considered as 0 in comparison
console.log(null<=0); //null is considered as 0 in comparison 
console.log(null<0);    //null is considered as 0 in comparison

console.log(undefined>0); //undefined is considered as NaN in comparison
console.log(undefined==0);
console.log(undefined>=0); 
console.log(undefined<=0); 
console.log(undefined<0);    //undefined is considered as NaN in comparison

//comparison of different types of datatypes
console.log(5 > "5"); //string is converted to number in comparison
console.log(5 < "10");
console.log(5 == "10");
console.log(5 === "10");


//increment and decrement operators

let x = 5;
console.log(x++); //post increment operator returns the value before incrementing
console.log(x);
x++;
console.log(x);
console.log(++x); //pre increment operator returns the value after incrementing