let marks =[12,15,18,21,24,27,30]
console.log(marks)
console.log("***********")
marks[3]=19
console.log("Replaced 21 by:"+marks[3])
console.log("so new array is:"+ marks)
console.log(marks.length)
marks.push(27)                          ///add an item at last of the array
console.log("so new array is:"+ marks)
marks.pop()                             /// back to previous array
console.log("so new array is:"+ marks)
marks.unshift(9)                        ///add item at the bigining
console.log("so new array is:"+ marks)
console.log(marks.indexOf(24))
console.log(marks.includes(120))

subMarks = marks.slice(2,4)
console.log(subMarks)
console.log("************")
sum =0
for(i=0; i<marks.length;i++)
{
    console.log(marks[i])
    sum= sum+ marks[i]
    
}
console.log("Summetion of the array: "+sum)

console.log("****************")
// New type of method 'reduce' whch is a replace of for loop
let total = marks.reduce((sum,mark) =>(sum+mark),0)
console.log(total)

console.log("****************")
let oddEvenArrray = [11,12,13,14,15,16,17]
console.log(oddEvenArrray)

let evenArray = []
let oddArray = []
for (i=0; i<oddEvenArrray.length; i++)
{
    if (oddEvenArrray[i]%2 ==0)
    {
        evenArray.push(oddEvenArrray[i])
        
    }
    else
    {
        oddArray.push(oddEvenArrray[i])
        
    }
}
console.log(evenArray)
console.log(oddArray)

/////// use Filter method to replace for loop
console.log("****************")
let useFilterMethodToGetEven = (oddEvenArrray.filter(oddEvenArrray=> oddEvenArrray%2==0))
console.log(useFilterMethodToGetEven)

let useFilterMethodToGetOdd =(oddEvenArrray.filter(oddEvenArrray => oddEvenArrray%2!=0))
console.log(useFilterMethodToGetOdd)

//map function
console.log("--------------")
let newMappedArray = useFilterMethodToGetEven.map(useFilterMethodToGetEven=> useFilterMethodToGetEven*3)
console.log(newMappedArray)
let sumOfArray= newMappedArray.reduce((sum,number)=>sum+number,0)         ///add all values in the array
console.log(sumOfArray)
