var a = 5;
var b = 10;
var c = "amit";

console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c);

let x = 5; //let makes the variable global and can be changed but var is also global but can be redeclared and changed
x = x + 5;
let y = 10;
let z = "amit";
console.log(x + y + 8);

{
  let x = 5;
  console.log(a);
}
console.log(x);

let o={
    "name":"amit",
    "age": 25,
    "is_city": true
}
console.log(o)
o.salary = 50000;
console.log(o)