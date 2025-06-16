/* 
Set timeout order
    Use the arrow format to create functions that output the values one and two to the
    console. Create a third function that outputs the value three to the console, and then
    invokes the first two functions.
    Create a fourth function that outputs the word four to the console and also use
    setTimeout() to invoke the first function immediately and then the third function.
    What does your output look like in the console? Try to get the console to output:
        Four
        Three
        One
        Two
        One
*/
const functionOne = () => console.log('One');
const functionTwo = () => console.log('Two');
const functionThree = () => {
    console.log('Three');
    functionOne();
    functionTwo();
}
const functionFour = () => {
    console.log('four');
    setTimeout(functionThree, 0);
    setTimeout(functionOne, 0)
}
functionFour();