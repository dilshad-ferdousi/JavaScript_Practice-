// sorting

let fruits =["grape","papaya","banana","guava","apple"]

console.log(fruits.sort())
console.log(fruits.reverse())


///array of numbers sorting

let number =[25,12,3,98,42,85,2,51]

console.log(number.sort())  //it doesnot work


console.log(number.sort((a,b)=>a-b))  //this works

console.log(number.sort((a,b)=>b-a))  //reverse