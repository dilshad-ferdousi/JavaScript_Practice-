// basic way

function add(a,b){
    return a+b
}
let sum = add(3,6)
console.log(sum)

//the function that does not have a name calles 'Anynoymus function' --function expression

let sum1 =function (a,b)   //anynoymous functions can be assigned to variables
{ 
    return a+b
}

console.log(sum1(5,90))


//or wright more simple way
let sum2 = (a,b)=>a+b    // '=>' (fat pipe means 'anynoymus function')
console.log(sum2(50,23))

//console.log(sum2)
