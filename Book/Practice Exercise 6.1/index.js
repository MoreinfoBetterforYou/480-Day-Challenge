/* 
Practice exercise 6.1
    See if you can write a function for yourself. We want to write a function that adds
    two numbers.
        1. Create a function that takes two parameters, adds the parameters together,
        and returns the result.
        2. Set up two different variables with two different values.
        3. Use your function on the two variables, and output the result using
        console.log.
        4. Create a second call to the function using two more numbers as arguments
        sent to the function.
*/
function addNumbers(a, b){
    return a + b;
}
let value1 = 40;
let value2 = 47;
console.log(addNumbers(value1, value2));
console.log(addNumbers(14, 15));