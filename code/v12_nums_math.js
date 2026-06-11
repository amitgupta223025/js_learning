//++++++++++++numbers+++++++++++++++

const balance = new Number(1000);
console.log(balance); // Output: 1000
console.log(balance.toString().length); // Output: 4
console.log(balance.toFixed(2)); // Output: 1000.00
console.log(balance.toExponential(2)); // Output: 1.00e+3
console.log(balance.toPrecision(5)); // Output: 1000.0
console.log(balance.valueOf()); // Output: 1000

const num1 = 10000000;
console.log(num1.toLocaleString()); // Output: 10,000,000
console.log(num1.toLocaleString("en-IN")); // Output: 1,00,00,000 indian format


//++++++++++++++MATHS+++++++++++++++



console.log(Math); // Output: [Math: null prototype] { ... }
console.log(Math.abs(-5)); // Output: 5
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.floor(4.8)); // Output: 4
console.log(Math.round(4.5)); // Output: 5
console.log(Math.max(1, 5, 3)); // Output: 5
console.log(Math.min(1, 5, 3)); // Output: 1
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.PI); // Output: 3.141592653589793

console.log(Math.random()); // Output: random number between 0 and 1
console.log((Math.random() * 100) + 1); // Output: random number between 1 and 100    
console.log(Math.floor(Math.random() * 100) + 1); // Output: random number between 1 and 100    

const min = 10;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Output: random number between RANGE OF 10 and 100

