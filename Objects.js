// object is the collection of properties

let person =
{
    firstName: 'Jhon',
    lastName: 'Doe',
    age : 24,
    fullName : function()  //anynomys function
    {
        console.log( this.firstName + this.lastName)
    }
}


console.log(person.fullName()) 
console.log(person.firstName)  //dot notation
//or
console.log(person['lastName'])  //array notation

// to replace an existing data's value
person.firstName ="Mark"

//to add a new property
person.gender = "Male"

console.log(person)

//to delete a property of the object
delete person.gender
console.log(person)

//to see a property exist in a object or not

console.log("gender" in person)

// to print all the propertiies in an object

for (key in person)
{
    console.log(person[key])
}
