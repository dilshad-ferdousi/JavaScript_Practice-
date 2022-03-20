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