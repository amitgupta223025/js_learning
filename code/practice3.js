//using forEach loop


//print name of students
const student=["amit","rahul",'sumit'];
student.forEach(function(student){
    console.log(`hello ${student}`);
})

//print square of no.
const numbers =[2,3,4,5]
numbers.forEach(function(num){
    console.log(num*num);
})

//find sum using forEach loop
const marks =[22,53,54,75]
let total=0;
marks.forEach(function(marks){
    total += marks;

})
let average = total / marks.length;
console.log("total marks ", total)
console.log("avaerage marks ", average)
