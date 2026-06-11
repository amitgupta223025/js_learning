const name = "amit";
const age = 22;
const semester = 4;
console.log("Name: " + name + ", Age: " + age + ", Semester: " + semester);

console.log(`Name: ${name}, Age: ${age}, Semester: ${semester}`);

const name1 = new String("India");
console.log(name1[0]); // Output: I
console.log(name1.length); // Output: 5
console.log(name1.toUpperCase()); // Output: INDIA
console.log(name1.__proto__); //output is {}
console.log(name1.charAt(4)); // Output: a
console.log(name1.indexOf("d")); // Output: 2

const newstring = name.substring(0, 3);
console.log(newstring); // Output: ami
const newstring1 = name.slice(-2, 5); //It takes -ve value and counts from the end of the string
console.log(newstring1); // Output: mit

const newstring2 = "  amit  "
console.log(newstring2.trim()); // Output: amit
console.log(newstring2.trimStart()); // Output: "amit  "
console.log(newstring2.trimEnd()); // Output: "  amit"

const url = "https://www.example.com";
const newurl = url.replace("https", "http");
console.log(newurl); // Output: http://www.example.com
const newurl1 = url.replaceAll("e", "a");
console.log(newurl1); // Output: https://www.axampla.com
console.log(url.includes("example")); // Output: true
console.log(url.startsWith("https")); // Output: true

const game= "amit-kumar-gupta";
console.log(game.split("-")); // Output: ["amit", "kumar", "gupta"] 

const newgame = game.split("-");
console.log(newgame[0]); // Output: amit
console.log(newgame[1]); // Output: kumar
console.log(newgame[2]); // Output: gupta

