/* 
Practice exercise 4.3
    1. Create a Boolean value for an ID variable
    2. Using a ternary operator, create a message variable that will check whether
    their ID is valid and either allow a person into a venue or not
    3. Output the response to the console
*/
let ID = `valid`;
const message = ID === "valid"? `Is allowed to enter the venue.`: `Is not allowed to enter the venue.`;
console.log(message);