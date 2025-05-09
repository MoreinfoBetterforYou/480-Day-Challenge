// A variable is an entity which is used to store a value for later use. Variables are like a box or a contianer that can hold different things. A variable can be used to store a number, a string, an object, an array or any other data type. You can declare a varaible using the let, const or var keywords. The let keyword is used to declare a block scope local variable, the const keyword is used to declare a block scope local variable that cannot be reassigned, and the var keyword is used to declare a function scope variable. The var keyword is not recommended to use in modern JavaScript as it can cause issues with hoisting and scoping.

// There are certain rules that you need to follow when declaring a variable:
// 1. A variable name must start with a letter, an underscore (_) or a dollar sign ($).
// 2. A variable name cannot start with a number.
// 3. A variable name can only contain letters, numbers, underscores (_) and dollar signs ($).
// 4. A variable name cannot contain spaces.
// 5. A variable name cannot be a reserved keyword (forexample: let, const, var, if, else, switch, case, break, continue, function, return, etc.).
// 6. A variable name should be descriptive and meaningful.

/* Some other important terms you should know are:

1. Initilization: The first ever value given to a variable in the entire lifespan of the computer program is referred to as initilization. 

2. Decleration: Decleration refers to the process of using keywords to declare a variable. It means that telling a computer program that this variable is defined or it is a thing.

3. Hoisting: Hoisting refers to the process done by java script in which the variable's decleration not its initialization is moved to the top of a computer program. The let, const, and var keyword are all hoisted in different ways. When you use the var keyword it does something like this:  */
console.log(variable); // It wont give an error it will just give undefined.
var variable = 5;

/* But when you try to do the same thing with let or const it will give a reference error. This is because the hoisting is in the Temporal Dead Zone (TDZ) leading it to be inaccessible. */
console.log(hi); // It will give a reference error as it won't work.
let hi = "hi";

// In the same way using const;
console.log(bye); // It will also give a reference error as it won't work.
let bye = "bye";

/* 4. Temporal Dead Zone (TDZ): The area where a variable is hoisted but is not accessible. Until it is initialized.  

5. Another important thing to note is that when you use the const keyword you can't just declare the variable independtly you have to initlialize (meaning give it a value) it at the same time or it will cause an error.
*/

const accountId = 123456789;
let accountName = "John Doe";
var accountPassword = "password123";
accountCity = "Rawalpindi";
let accountState;

// You should prefer not to use var keyword as it causes block scope and functional scope problems. You should use let and const keywords instead.
// accountId = 2; // This will cause an error because accountId is a constant and cannot be reassigned.

accountName = "M. Hassan Farooq";
accountPassword = "newpassword456";
accountCity = "Islamabad";

console.log(accountId);
console.table([accountId, accountName, accountPassword, accountCity, accountState]);