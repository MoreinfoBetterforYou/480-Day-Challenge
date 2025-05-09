// A number is a primitive data type in Java Script. A number can be declared using a variable or by creating a new object.
let number = 15;
console.log(number);
console.log(typeof number);

let numberObject = new Number(300000);
console.log(numberObject);
console.log(typeof numberObject);

// To see all the type of methods and functions that can be used on numbers you can use the console of your browser and write this:
console.log(numberObject.__proto__);
// Or you can use this:
console.log(Object.getPrototypeOf(numberObject));
console.log();

// Here we will be discussing some of the most commonly used methods and functions that can be used on numbers.

// 1. toString(): The toString() method converts a number to a string:
let age = 15;
let ageString = age.toString();
console.log("toString() function:");
console.log(`The number ${age} in string form is: ${ageString}`);
console.log();

// 2. toExponential(): The toExponential() method converts a number to exponential notation:
let numberExponential = 300000;
let numberExponentialString = numberExponential.toExponential();
console.log("toExponential() function:");
console.log(`The number ${numberExponential} in exponential form is: ${numberExponentialString}`);
console.log();

// 3. toFixed(): The toFixed() method converts a number to a string, rounding to a specified number of decimals:	
let numberFixed = 3.14159265358979323846;
let numberFixedString = numberFixed.toFixed(2);
console.log("toFixed() function:");
console.log(`The number ${numberFixed} in fixed form is: ${numberFixedString}`);
console.log();

// 4. toPrecision(): The toPrecision() method formats a number to a specified length:
let numberPrecision = 3.14159265358979323846;
let numberPrecisionString = numberPrecision.toPrecision(5);
console.log("toPrecision() function:");
console.log(`The number ${numberPrecision} in precision form is: ${numberPrecisionString}`);
console.log();

// 5. toLocaleString(): The toLocaleString() method converts a number to a string, using locale conventions:
let numberLocale = 1000000;
let numberLocaleString = numberLocale.toLocaleString("en-US");
console.log("toLocaleString() function:");
console.log(`The number ${numberLocale} in locale form is: ${numberLocaleString}`);
console.log();

// To view the number from earlier in Pakistan's locale:
let numberLocaleStringPK = numberLocale.toLocaleString("en-PK", {
    style: "currency",
    currency: "PKR"
});
console.log("toLocaleString() function:");
console.log(`The number ${numberLocale} in Pakistan's locale form is: ${numberLocaleStringPK}`);
console.log();