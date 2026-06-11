//for statement

for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
}

let myArr=["false", 'yes', 'opposite']
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
}

//nested loop

for (let i = 0; i < 4; i++) {
    //console.log(`value is ${i}`)
    for (let j = 0; j <4; j++) 
    {
        //console.log(`inner loop value is ${i} outer loop value ${j}`)
        //console.log(i+ "*" + j+ "=" + i* j)
    }
}

//while statment

let index=0
while (index <=10){
    //console.log(`value of index${index}`);
    index = index+2
}

//do-while

let index1=0
do{
    //console.log(`index1 is ${index1}`);
    index1++

}while(index1 <=5)


//for-of loop

const greeting="helo world"
for(const greet of greeting){
   // console.log(`each char is ${greet}`)
}

//for-of loop onn maps  
//(maps used to store key vakue pair)

const map= new Map()
map.set('in','india')
map.set('usa','united states of america')
map.set('fr','france')
console.log(Map)
for(const[key,value] of map){
    console.log(key,'-',value);
}

//for-of loop on objects 
const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject}`)
}

////for-of loop on arrays
const prog= ['python','c++','js','ruby']
for (const key in prog){
    console.log(key);  //it gives number only ie 0,1,2,3
    console.log(prog[key]);  //it generates values of array

} 


//for-each loop
const progm= ['python','c++','js','ruby']
progm.forEach(function(val){
    console.log(val);
    
})
//or
progm.forEach((itam,index,arr )=>{
    console.log(itam,index,arr);
    
})

const myCoding=[
    {
        languageName:'javascript',
        languageFile:'js'
    },
    {
        languageName:'pyhton',
        languageFile:'py'
    },
    {
        languageName:'java',
        languageFile:'java'
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFile);

})