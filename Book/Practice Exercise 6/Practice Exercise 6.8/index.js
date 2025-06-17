/* 
Practice exercise 6.8
    1. Set a variable name and assign a function to it. Create a function expression
    with one parameter that outputs a provided argument to the console.
    2. Pass an argument into the function.
    3. Create the same function as a normal function declaration.
*/
let myFunction = function (parameter) {
    console.log(parameter);
}
myFunction(`Hi, This repo was created by a 15 year old.`);

// Recreating my function as a normal function declaration.
function myFunction2(parameter){
    console.log(parameter);
}
myFunction2(`Hi, This repo was created by a 15 year old.`);