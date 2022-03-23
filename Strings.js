
let day = "Tuesday "
console.log(day.length)   //8

//to slice the string and print the 4th character of the string
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[3])  //s

//to split a string and print the 2nd string
splitday= day.split("s")
console.log (splitday[1])

//to trim the extra spaces on both side
console.log (splitday[1].length)
console.log (splitday[1].trim().length)

// to convert string to number
let fDate ='29th of may'
let sDate = '22th of may'
let diffrence = parseInt(fDate)-parseInt(sDate)
console.log(diffrence)
console.log(diffrence.toString())  // to stringify

//concatination

let day1= day+"is funday and day"
console.log(day1)


//to get the 2nd 'day' of the string
let day2= day1.indexOf("day",5)
console.log(day2)

// to get how many 'day's are there in the 'day1 string

let count = 0
let value = day.indexOf("day")
while(value!== -1)   //if not get any index, it returns -1
{
    count++
    value = day1.indexOf("day",value+1)
}
console.log(count)