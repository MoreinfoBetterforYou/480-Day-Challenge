/* 
Practice exercise 7.2
    Get your friend's full name:
        1. Using the Person class from Practice exercise 7.1, add a method called
        fullname, which returns the concatenated value of firstname and lastname
        when invoked.
        2. Create values for person1 and person2 using two friends' first and last names.
        3. Using the fullname method within the class, return the full name of one or
        both people.
*/
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return this.firstName + this.lastName
    }
}
const person1 = new Person('Hadi', 'Asad');
const person2 = new Person(`Ibrahim`, 'Malik');
console.log(person1.fullName());
console.log(person2.fullName());