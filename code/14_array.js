//slice and splice operations on array
const myArr = [0,1,2,3,4,5]
const myn1 = myArr.slice(1, 3) // slice creates a new array from the specified start index to the end index (exclusive)
console.log(myn1) // Output: [1, 2]
console.log('a', myArr); // Output: [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3) // splice removes elements from the original array and returns the removed elements as a new array
console.log(myn2) // Output: [1, 2, 3]
console.log('b', myArr); // Output: [0, 4, 5]

//join and split
const myArr1 = ['a', 'b', 'c', 'd']
const joinedString = myArr1.join('-') // join creates a string by concatenating all the elements of the array, separated by the specified separator
console.log(joinedString) // Output: "a-b-c-d"

const splitString = joinedString.split('-') // split creates an array by dividing a string at the specified separator
console.log(splitString) // Output: ['a', 'b', 'c', 'd']

const newArr = myArr1.join() // slice creates a new array from the specified start index to the end index (exclusive)
console.log(newArr) // Output: "a,b,c,d"
console.log(typeof newArr) // Output: string



//lecture15

//concat and spread operator
const heroes = ['Batman', 'Superman', 'Wonder Woman']
const villains = ['Joker', 'Lex Luthor', 'Cheetah']

heroes.push('Flash') // push adds an element to the end of the array
console.log(heroes)

heroes.push(villains) // push adds the entire villains array as a single element to the end of the heroes array
console.log(heroes)

// Concat adds  arrays
const allCharacters = heroes.concat(villains)
console.log(allCharacters)

//spread operator adds elements of one array to another array
const allCharacters1 = [...heroes, ...villains]
console.log(allCharacters1)

//flat
const newArray = [1, 2, [3, 4], [5, 6, [7, 8]]]
const flattenedArray = newArray.flat(2) // flat flattens the array to the specified depth
console.log(flattenedArray) // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(Array.isArray("AMIT")) // Output: true
console.log(Array.isArray(heroes)) // Output: true
console.log(Array.from("AMIT")) // Output: ['A', 'M', 'I', 'T']


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // Output: [100, 200, 300]

