module.exports = class Person
{
    age =24
    get location() {return "Canada"}


//Constructer is a metod which executes by default when you an object of the class 
constructor(firstName,lastName)    //when you define a variable in a constructor it calls instance variable
    {
        this.firstName =firstName
        this.lastName =lastName
    }     
    
    //methods
    fullName() {
        this.firstName + this.lastName
    }



}
let person = new Person("Tim","Robins")
console.log(person.age)
console.log(person.location)
console.log(person.fullName)