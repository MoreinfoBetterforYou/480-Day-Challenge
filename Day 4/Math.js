/* The Math object is a predefined object in Java Script which is used to perform different math related operations and functions. To see all of the of the different types of methods or functions that the Math object has type this into the console of your web browser: */
console.log(Math);

// Here we will be discussing some of the most commonly used methods and functions that can be used on the Math object.

/*   1. Math.abs(): The Math.abs() method returns the absolute value of a number. When working as a software developer you will have to work with multiple values that the user gives in some cases you will need to give the positive answer of the value the user has provided. The absolute value does almost nothing it just changes the sign of a negative number to positive and the sign of a positive number remains the same.  */
let number = -10;
let absoluteValue = Math.abs(number);
console.log("Math.abs() function:");
console.log(`The absolute value of ${number} is: ${absoluteValue}`);
console.log();

/*   2. Math.ceil(): The Math.ceil() method returns the smallest integer greater than or equal to a given number. This means that if the number is a decimal number then it will round up the number to the next whole number. */
let numberCeil = 3.14;
let numberCeilValue = Math.ceil(numberCeil);
console.log("Math.ceil() function:");
console.log(`The number ${numberCeil} rounded up is: ${numberCeilValue}`);
console.log();

/*   3. Math.floor(): The Math.floor() method returns the largest integer less than or equal to a given number. This means that if the number is a decimal number then it will round down the number to the previous whole number. */
let numberFloor = 3.99;
let numberFloorValue = Math.floor(numberFloor);
console.log("Math.floor() function:");
console.log(`The number ${numberFloor} rounded down is: ${numberFloorValue}`);
console.log();

/* 4. Math.random(): The Math.random() function is used to return a random number between 0 and 1. You will use the Math.random() function often with the Math.floor() function to find a random number between a certain range. */
let randomNumber = Math.random();
console.log("Math.random() function:");
console.log(`The random number between 0 and 1 is: ${randomNumber}`);
console.log();

// To generate a random Number between any specific range you can use this formula:
min = 1;
max = 100;
let random = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`The random number between 1 and 100 is: ${random}`);
console.log();

/* 5. Math.exp(): The Math.exp() function is used to find the value of Euler's numbers raised to the power of any number written in it.  */
let exponent = 1;
let result = Math.exp(exponent);
console.log("Math.exp() function:")
console.log(`Euler's number raised to the power of ${exponent} is: ${result}`);
console.log();

/* 6. Math.log(): The Math.log() function is used to find the natural log of any number.  */
let numberToFindLogOf = 10;
let log = Math.log(numberToFindLogOf);
console.log("Math.log():")
console.log(`The natural log of 10 is: ${log}`);
console.log();

/* 7. Math.max(): The Math.max() function is used to find the maximum value in a given array. */
let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
let maxValue = Math.max(...arrayOfNumbers)
console.log("Math.max() function:");
console.log(`The maximum value in the array is: ${maxValue}`);
console.log();

/* 8. Math.min(): The Math.min() function is used to find the minimum value in a given array. */
let minValue = Math.min(...arrayOfNumbers)
console.log("Math.min() function:");
console.log(`The minimum value in the array is: ${minValue}`);
console.log();

/* 9. Math.pow(): The Math.pow() function is used to find the power of a number. */
let base = 2;
let exponentPower = 3;
let power = Math.pow(base, exponentPower);
console.log("Math.pow() function:");
console.log(`The value of ${base} raised to the power of ${exponentPower} is: ${power}`);
console.log();

/* 10. Math.sqrt(): The Math.sqrt() function is used to find the square root of a number. */
let numberToFindSquareRootOf = 16;
let squareRoot = Math.sqrt(numberToFindSquareRootOf);
console.log("Math.sqrt() function:");
console.log(`The square root of ${numberToFindSquareRootOf} is: ${squareRoot}`);
console.log();

/* 11. Math.round(): The Math.round() function is used to round a specific number to the nearest integer.  */
let numberToRound = 3.5;
let roundedNumber = Math.round(numberToRound);
console.log("Math.round() function:");
console.log(`The number ${numberToRound} rounded to the nearest integer is: ${roundedNumber}`);
console.log();

/* 12. Math.trunc(): The Math.trunc() function is used to remove the decimal point from a floating point number. It returns the mantissa part of the given number. */
let numberToTruncate = 3.14;
let truncatedNumber = Math.trunc(numberToTruncate);
console.log("Math.trunc() function:");
console.log(`The number ${numberToTruncate} truncated is: ${truncatedNumber}`);
console.log();

// Now we will be discussing some of the most commonly used constants that are used in the Math object. The most commonly used constants are:
// 1. Math.PI: The Math.PI constant is used to find the value of pi. Pi is a mathematical constant that is used to find the circumference of a circle. The value of pi is 3.14159265358979323846.
let pi = Math.PI;
console.log("Math.PI constant:");
console.log(`The value of pi is: ${pi}`);
console.log();

// 2. Math.E: The Math.E constant is used to find the value of Euler's number. The value of Euler's number is 2.71828182845904523536.
let eulerNumber = Math.E;
console.log("Math.E constant:");
console.log(`The value of Euler's number is: ${eulerNumber}`);
console.log();