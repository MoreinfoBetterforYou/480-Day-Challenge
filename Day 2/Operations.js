let value = 300000;
let NegativeValue = -value;
console.log(NegativeValue); // This will print -300000. This is the value of the variable NegativeValue.

// Java Script allows various type of arithmetic and other operations to be carried out. JavaScript suppports all the basic arithmetic operations. Some of the operations that can be performed in JavaScript are:

// Addition:
let firstNumber = 10;
let secondNumber = 20;
let sum = firstNumber + secondNumber;
console.log(`Sum of ${firstNumber} + ${secondNumber} = ${sum}`);

// Subtraction:
let difference = firstNumber - secondNumber;
console.log(`Difference of ${firstNumber} - ${secondNumber} = ${difference}`);

// Multiplication:
let product = firstNumber * secondNumber;
console.log(`Product of ${firstNumber} * ${secondNumber} = ${product}`);

// Division:
let quotient = firstNumber / secondNumber;
console.log(`Quotient of ${firstNumber} / ${secondNumber} = ${quotient}`);

// Modulus: The modulus operator return the remainder of the division operator.
let remainder = firstNumber % secondNumber;
console.log(`Remainder of ${firstNumber} % ${secondNumber} = ${remainder}`);

// Power:
let power = firstNumber ** secondNumber;
console.log(`Power of ${firstNumber} ** ${secondNumber} = ${power}`);

// You can also add two strings using the + operator. This is called string concatenation.
let firstString = "Hello";
let secondString = "World";
let concatenatedString = firstString + " " + secondString;
console.log(`Concatenated String: ${concatenatedString}`);

// Okay no we are going to tell you about some strange strings that happen when using string concatenation.
console.log(1 + "2"); // You might think it will print 3 but it actually prints "12".
// But if you do this:
console.log(1 + 2 + "2"); // It will print 32. This is because the first two numbers are added first and then the string is concatenated.

// Another type of operation in JavaScript is the increement and decrement operation. The increment operator (++) increases the value of a variable by 1, while the decrement operator (--) decreases the value of a variable by 1.
// The increment and decrement operators can be used in two ways: as a prefix (before the variable) or as a postfix (after the variable). The difference between the two is when the value is changed. In prefix, the value is changed before it is used, while in postfix, the value is changed after it is used.
let x = 5;
let y = 5;
console.log(++x); // Prefix increment: x is incremented to 6, then printed.
console.log(x); // x is now 6
console.log(y++); // Postfix increment: y is printed as 5, then incremented to 6.
console.log(y); // y is now 6