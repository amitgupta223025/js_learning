 const student ={
    name:"amit",
    age: 12,
    branch:"cse",
    skills:["html","css","js"]
 }
 console.log(student.name.toUpperCase());

student.skills.push("github");
console.log(student.skills.join("|"));



let myDate = new Date()
console.log(myDate.toLocaleDateString());

function greetstudent(name){
    return `wlcome ${name}`
}
console.log(greetstudent("amit"));