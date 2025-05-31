/*
Practice exercise 3.5
    1. Create an object named people that contains an empty array that is called
    friends.
    2. Create three variables, each containing an object, that contain one of your
    friend's first names, last names, and an ID value.
    3. Add the three friends to the friend array.
    4. Output it to the console. 
 */
const friend1 = {
    firstName: "John",
    lastName: "Doe",
    id: 1
}
const friend2 = {
    firstName: "Jane",
    lastName: "Smith",
    id: 2
}
const friend3 = {
    firstName:  "Jack",
    lastName: "Johnson",
    id: 3
}
const people = {
    friends: [friend1, friend2, friend3]
}
console.log(people.friends);