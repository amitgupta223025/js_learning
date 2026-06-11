let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleString()) // Output: 6/17/2024, 10:30:45 AM
console.log(myDate.toLocaleDateString()) // Output: 6/17/2024
console.log(myDate.toLocaleTimeString())    // Output: 10:30:45 AM

console.log(typeof myDate) // Output: object

let mycreatedDate = new Date("2024-06-17")
console.log(mycreatedDate) // Output: 2024-06-17T00:00:00.000Z
console.log(mycreatedDate.toDateString()) // Output: Mon Jun 17 2024
let mycreatedDate1 = new Date(2023, 3, 15) // month is 0 based index
console.log(mycreatedDate1) // Output: 2023-04-14T18:30:00.000Z
console.log(mycreatedDate1.toDateString()) // Output: Sat Apr 15 2023

//+++++++++++time++++++++++++++++`
let mydate11 = new Date("02-14-2024")
let mytime =Date.now()
console.log(mydate11) // Output: 2024-02-14T00:00:00.000Z
console.log(mytime) // Output: 1718707845000 (current timestamp in milliseconds)
console.log(mydate11.getTime()) // Output: 1707878400000 (timestamp of the date in milliseconds)
console.log(mydate11.getTime() - mytime) // Output: -1080000000 (difference in milliseconds between the date and current time)
console.log(Math.floor((Date.now()/1000)))// Output: -12 (difference in days between the date and current time)


//++++++++++++++extra methods+++++++++++++++++++
let mydate12 = new Date("2024-06-17")
console.log(mydate12.getFullYear()) // Output: 2024
console.log(mydate12.getMonth()) // Output: 5 (month is 0 based index)
console.log(mydate12.getMonth()+1) // Output: 6 actual month (month is 0 based index)
console.log(mydate12.getDate()) // Output: 17   

console.log(mydate12.getDay()) // Output: 1 (0 is Sunday, 1 is Monday, ..., 6 is Saturday)

console.log(mydate12.toLocaleDateString("default", { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
 }))// Output: Monday, June 17, 2024