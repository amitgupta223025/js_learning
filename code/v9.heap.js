//stack behaviour

let a =10;
let b =20;
b=a;

console.log(a);
console.log(b);
//when we assign a to b, the value of a is copied to b and both a and b are independent of each other. This is called stack behaviour. In stack, the value is stored in the memory and when we assign a to b, the value of a is copied to b and both a and b are independent of each other.



//heap behaviour
let user1={
    name:"amit",
    age:25
}
let user2=user1;
console.log(user1);
console.log(user2);
//when we assign user1 to user2, both variables point to the same object in memory. This is called heap behaviour. In heap, the object is stored in the memory and when we assign user1 to user2, both variables point to the same object in memory.

let college1={
    name:"abc college",
    location:"delhi"
}
let college2=college1;
college2.name="xyz college";

console.log(college1);
console.log(college2);
//when we assign college1 to college2, both variables point to the same object in memory. This is called heap behaviour. In heap, the object is stored in the memory and when we assign college1 to college2, both variables point to the same object in memory.


let arrray1=[1,2,3];
let arrray2=arrray1;
arrray2.push(4);
console.log(arrray1);
console.log(arrray2);
//when we assign arrray1 to arrray2, both variables point to the same array in memory. This is called heap behaviour. In heap, the array is stored in the memory and when we assign arrray1 to arrray2, both variables point to the same array in memory.