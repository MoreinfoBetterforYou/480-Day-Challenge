// A variable is an entity which is used to store a value for later use. Variables are like a box or a contianer that can hold different things. A variable can be used to store a number, a string, an object, an array or any other data type. You can declare a varaible using the let, const or var keywords. The let keyword is used to declare a block scope local variable, the const keyword is used to declare a block scope local variable that cannot be reassigned, and the var keyword is used to declare a function scope variable. The var keyword is not recommended to use in modern JavaScript as it can cause issues with hoisting and scoping.
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