/* 
Practice exercise 6.3
    Create a basic calculator that takes two numbers and one string value indicating
    an operation. If the operation equals add, the two numbers should be added. If the
    operation equals subtract, the two numbers should be subtracted from one another.
    If there is no option specified, the value of the option should be add.
    The result of this function needs to be logged. Test your function by invoking it
    with different operators and no operator specified.
        1. Set up two variables containing number values.
        2. Set up a variable to hold an operator, either + or -.
        3. Create a function that retrieves the two values and the operator string value
        within its parameters. Use those values with a condition to check if the
        operator is + or -, and add or subtract the values accordingly (remember if
        not presented with a valid operator, the function should default to addition).
        4. Within console.log(), call the function using your variables and output
        the response to the console.
        5. Update the operator value to be the other operator type—either plus or
        minus—and call to the function again with the new updated arguments.
*/
function calculator(num1, num2, operation){
    if(operation === 'add'){
        return num1 + num2;
    }
    else if(operation === 'subtract'){
        return num1 - num2;
    }
    else{
        return num1 + num2; // Default state set to addition.
    }
}
console.log(calculator(10, 5, 'addition')); // Addition.
console.log(calculator(10, 5, 'subtract')); // Subtract.
console.log(calculator(10, 6)); // Default.