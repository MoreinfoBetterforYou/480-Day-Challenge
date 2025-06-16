/* 
Create a recursive function
    Create a recursive function that counts up to 10. Invoke the function with different
    start numbers as the arguments that are passed into the function. The function
    should run until the value is greater than 10.
*/
function countTo10(number) {
    if (number > 10){
        return;
    }
    console.log(number);
    countTo10(number + 1);
}

countTo10(1);