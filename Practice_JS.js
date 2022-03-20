console.log("Hello World")

let a =5
let b = "String"
console.log(typeof(a))
console.log(typeof(b))


const flag = true   // here the variable's value is same but in the next line
                    // we are changing the expression to false
if(!flag)
{
    console.log("Condition Satisfied")
}
else
{
    console.log(flag)
    console.log("Condition Not Satisfied")
}


i=0
// while(i<20)
// {
//     console.log(i)
//     i=i+2
// }

// do
// {
//     console.log(i)
//     i=i+3
// }
// while(i<30)

// do
// {
//     console.log(i)
//     i=i+3
// }
// while(i<30)
//console.log(i)
console.log("************************")
//for 1 - 20 give me the common multiple valies of 2 and 5
for (k=1; k<100; k++)
{
    if(k%2 ==0 && k%5 ==0)    // it will show only those numbers wich are miltiplies bu 2 and 5
    {

    console.log("output is: "+k)
    }
    
}
console.log("**********Nested for loop ***********")
n= 0
for (k =1; k<100; k++)
{
   
    if(k%2 ==0 && k%5 ==0)    // it will show only first 3 numbers wich are miltiplies bu 2 and 5
    {
       n++ 
       console.log("output is: "+k)
    if (n == 3)
    {
        
        break;
    }
    }
    // if(k%5 ==0)
    // {
    // console.log(k)
    // }
    
}