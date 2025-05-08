// You can also convert one data type to another data type. This is called type conversion. There are two types of type conversion in JavaScript:

// 1. Implicit type conversion: This is done automatically by the JavaScript engine. For example, when you add a number and a string, the number is converted to a string and the result is a string.

// 2. Explicit type conversion: This is done manually by the programmer. For example, when you want to convert a string to a number, you can use the Number() function. This is called type casting. There are various functions available in JavaScript to convert one data type to another data type.

// When you try to convert this "33" into a number, it will return 33. If you use the typeof operator to check the type of the variable, it will return number.
let string_number = "33";
string_number = Number(string_number);
console.log(typeof(string_number));
console.log();

// When you try to convert this "33abc" into a number, it will return NaN. This is because the string "33abc" cannot be converted to a number. When you use the typeof operator to check the type of the variable, it will return number. This is because NaN is a special type of number in Java Script. This is a bug in JavaScript and is wrong.
let string_number2 = "33abc";
string_number2 = Number(string_number2);
console.log(typeof(string_number2));
console.log()

// When you convert this true into a number, it will return 1. This is because true is converted to 1. When you use the typeof operator to check the type of the variable, it will return number. This is because 1 is a number.
let true_value = true;
true_value = Number(true_value);
console.log(typeof true_value);
console.log();

// When you convert this false into a number, it will return 0. This is because false is converted to 0. When you use the typeof operator to check the type of the variable, it will return number. This is because 0 is a number.
let false_value = false;
false_value = Number(false_value);
console.log(typeof false_value);
console.log();

// When you convert this null into a number, it will return 0. This is because null is converted to 0. When you use the typeof operator to check the type of the variable, it will return number. This is a bug in JavaScript and is wrong.
let null_value = null;
null_value = Number(null_value);
console.log(typeof null_value);
console.log();

// When you convert this undefined into a number, it will return NaN. This is because undefined is converted to NaN. When you use the typeof operator to check the type of the variable, it will return number. This is a bug in JavaScript and is wrong.
let undefined_value = undefined;
undefined_value = Number(undefined_value);
console.log(typeof undefined_value);
console.log();
