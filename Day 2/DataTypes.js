"use strict"; //This treats all the JS code as the newer version of JS. It is a good practice to use this in every JS file.

// alert(3 + 3); // This will not work in Node.js as alert is not defined in Node.js. It is only defined in the browser.

// Data Types in JavaScript.

// A data type is a classification of data that tells the compiler or interpreter that what type of value the data is. There are various data types avaible in JavaScript. The most commonly used data types are:

// 1. String: A string is a sequence of characters that is enclosed in single or double quotes. A string can contain letters, numbers, symbols and spaces. A string is a primitive data type. 
let string = "Hello World!"; // This is a string.
console.log(string);
console.log(typeof string); // This will print string. This is the type of the variable string.
console.log()

// 2. Number: A number is a numeric value that can be an integer or a floating point number. A number is a primitive data type. The numbers in this data type range from -2^53 + 1 to 2^53 - 1. 
let number = 123456789; // This is a number.
console.log(number); // This will print 123456789. This is the value of the variable number.
console.log(typeof number); // This will print number. This is the type of the variable number.
console.log(Number.MAX_SAFE_INTEGER); // This will print 9007199254740991. This is the maximum safe integer in JavaScript.
console.log(Number.MIN_SAFE_INTEGER); // This will print -9007199254740991. This is the minimum safe integer in JavaScript.
console.log();

// 3. BigInt: A BigInt is a numeric value that can be an integer or a floating point. It is used to represent numbers larger than the maximum safe integer in JavaScript. A BigInt is a primitive data type.
let bigInt = 1234567890123456789012345678901234567890n; // This is a BigInt. The n at the end of the number indicates that it is a BigInt.
console.log(bigInt); // This will print 1234567890123456789012345678901234567890n. This is the value of the variable bigInt.
console.log(typeof bigInt); // This will print bigint. This is the type of the variable bigInt.
console.log();

// 4. Boolean: A boolean is a logical value that represents whether a given value is true or false. A boolean is a primitive data type.
let boolean = true; // This is a boolean. It can be either true or false.
console.log(boolean); // This will print true. This is the value of the variable boolean.
console.log(typeof boolean); // This will print boolean. This is the type of the variable boolean.
console.log();

// 5. Null: A null is a special type of value that represents a variable that was intentionally given a value of null. A null is a primitive data type.
let nullValue = null; // This is a null. It represents a variable that was intentionally given a value of null.
console.log(nullValue); // This will print null. This is the value of the variable nullValue.
console.log(typeof nullValue); // This will print object. This is the type of the variable nullValue. This is a bug in JavaScript.
console.log();

// 6. Undefined: An undefined is a special type of value that represents a variable that was not given a value. An undefined is a primitive data type.
let undefinedValue; // This is an undefined. It represents a variable that was not given a value.
console.log(undefinedValue); // This will print undefined. This is the value of the variable undefinedValue.
console.log(typeof undefinedValue); // This will print undefined. This is the type of the variable undefinedValue.
console.log();