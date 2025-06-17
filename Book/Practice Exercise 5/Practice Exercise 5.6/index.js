/* 
Practice exercise 5.6

    This exercise will construct an array as it loops through the incrementing values of
    x. Once the array is done, this exercise also will demonstrate several ways to output
    array contents.

        1. Create an empty array

        2. Run a loop 10 times, adding a new incrementing value to the array

        3. Log the array into the console

        4. Use the for loop to iterate through the array (adjust the number of iterations
        to however many values are in your array) and output into the console

        5. Use the for of loop to output the value into the console from the array
*/
let arr = [];
for (let i = 0; i < 10; i++){
    arr.push(i + 1);
}
console.log(arr);
for (const value of arr){
    console.log(value);
}