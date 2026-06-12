const myNums = [1,2,3,4,5,6,7,8,9]
const newNums = myNums.filter((num)=>num>4)
const newNums1 = myNums.filter((num)=>{
    return num>4   
})  //when use paraenthesis it makes scope for which we have return value

console.log(newNums1);

//by forEach loop
const mynums2 = []
myNums.forEach((num)=>{
    if(num>4){
        mynums2.push(num)
    }
})
console.log(mynums2)

//map
const myNumers = [1,2,3,4,5,6,7,8,9]
//const newN = myNumers.map((num)=> num+10)
//console.log(newN)

//use of multiple map
const newNu = myNumers
            .map((numm)=> numm*10)
            .map((num1)=> num1+1)  //this num1 has values operated by numm ie num1= 10+1
            .filter((num)=> num>=40)
 console.log(newNu)


 //reduce

 const myNumss =[1,2,3]
 const myTotal =myNumss.reduce(function (acc, currval){
    console.log(`acc:${acc} and currval:${currval} `);
    return acc+currval
 },0)
 //or
 //const myTotal = myNumss.reduce((acc,curr)=>acc+curr,0)
 console.log(myTotal);
