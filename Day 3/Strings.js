// The data type string is actually an object. You declare a string using two ways first by using a vairable to declare it or using the way you create a new object.
let String1 = "Hello World!";
let String_1 = new String("Hello World!");

console.table([String1, String_1]);

// You can see this when you use the typeOf operator:
console.table([typeof(String1), typeof(String_1)]);

// When you perform different operations on a string like length or toUpperCase() it actually turns your string into a java script object so you don't have to do so. There are many different types of methods and functions that can be used on strings. You can see all of them if you want using the console of your browser and writing this:
// String1.__proto__

// Here we will be discussing some of the most commonly used methods and functions that can be used on strings. 

// 1. length: The length property returns the number of characters in a string.
let stringLength = String1.length;
console.log("Length Property:");
console.log(`The number of characters in the string "${String1}" is ${stringLength}.`);
console.log();

// 2. toUpperCase(): The toUpperCase() method returns the string in uppercase letters.
let upperCaseString = String1.toUpperCase();
console.log("toUpperCase() function:");
console.log(`The string "${String1}" in uppercase letters is "${upperCaseString}".`);
console.log();

// 3. toLowerCase(): The toLowerCase() method returns the string in lowercase letters.
let lowerCaseString = String1.toLowerCase();
console.log("toLowerCase() function:");
console.log(`The string "${String1}" in lowercase letters is "${lowerCaseString}".`);
console.log();

// 4. charAt(): The charAt() method returns the character at a specified index in a string.
let charAtString = String1.charAt(0);
console.log('charAt() function:');
console.log(`The character at index 0 in the string "${String1}" is "${charAtString}".`);
console.log();

// 5. indexOf(): The indexOf() method returns the index of the frist ever occurence of a specific character in a string.
let indexOfString = String1.indexOf("o");
console.log("indexOf() function:")
console.log(`The index of the first occurrence of "o" in the string "${String1}" is ${indexOfString}.`);
console.log();

// 6. endsWith(): The endsWith() function checks if whether a given string ends with a particular character or not. It gives its answer in a boolean value which may either be true or false. 
let EndsWith = String1.endsWith("!");
console.log("endsWith() function:")
console.log(`Does the string ${String1} end with '!'? The answer is ${EndsWith}`);
console.log();

// 7. includes(): The includes() function checks if whether a given string includes a particular character or not. It gives its answer in the form of a boolean value which may either be true or false. 
let Includes = String1.includes("!");
console.log("includes() function:");
console.log(`Does the string ${String1} include the character '!'? The answer is ${Includes}}`);
console.log();

// 8. lastIndexOf(): The lastIndexOf() function is used to give the index of the last ever occurence of a given character.
let lastIndex = String1.lastIndexOf("l");
console.log("lastIndexOf() function:");
console.log(`The index of the last ever occurence of the letter 'l' in the string ${String1} is: ${lastIndex}`);
console.log();

// 9. padEnd(): The padEnd() function is used to add characters to the end of a  string until it reaches a particular length.
let price = "5.";
let costInCents = price.padEnd(5, "0");
console.log("padEnd() function:")
console.log(`The price in cents is: $${costInCents}`);
console.log();

// 10. padStart(): The padStart() function is used to add characters to the start of a  string until it reaches a particular length.
let costInThousands = price.padStart(6, "0");
console.log("padStart() function:");
console.log(`The price in thousands is: $${costInThousands}`);
console.log();

// 11. repeat(): The repeat() function is used to to repeat a given string a given number of times. 
let message = "Hi ";
let repeated = message.repeat(6);
console.log(`The message "${message}" repeated 6 times is: ${repeated}`);
console.log();

// 12. replace(): The replace() function is used to replace a given character in a string with another character.
let replaced = String1.replace(" ", "-");
console.log("replace() function:");
console.log(`The string "${String1}" after replacing the white-space with a hyphen is: ${replaced}`);
console.log();

/*  
13. replaceAll(): The replaceAll() function is used to replace all the occurences a given character or word in a string with another character or word. Keep in mind that this function is case sensitive to use this function in a way that is case insesitive you need to use the global flag. The 1st way is the case sensitive way while the 2nd way is the insesitive way. 
1. Case Sensitive*/
let fruits = "apple, banana, mango";
let replacedFruits = fruits.replaceAll("apple", "orange");
console.log("replaceAll function:");
console.log(`The strings fruits ${fruits} was replaced using the replaceAll() function to form the string ${replacedFruits}.`);
console.log();
// 2. Insesitive of case:
let animals = "cat, Cat, cAt, caT";
let replacedAnimals = animals.replaceAll(/cat/gi, "dog");
console.log("replaceAll function:");
console.log(`The animals ${animals} were replaced using the replaceAll() function to form to the string ${replacedAnimals}.`);
console.log();

// 14. slice(): The slice() function is used to extract a part of a string and return it as a new string. It takes two parameters the start index and the end index. The end index is not included in the new string.
let slicedString = String1.slice(0, 5);
console.log("slice() function:");
console.log(`The string "${String1}" after slicing it from index 0 to 5 is: "${slicedString}".`);
console.log();

// 15. split(): The split() function is used to split a string into an array of substrings based on a specified separator.
let splitString = String1.split(" ");
console.log("split() function:");
console.log(splitString);
console.log();

// 16. startsWith(): The startsWith() function checks if whether a given string starts with a particular character or not. It gives its answer in the form of a boolean value which may either be true or false.
let startsWith = String1.startsWith("H");
console.log("startsWith() function:");
console.log(`Does the string ${String1} start with 'H'? The answer is ${startsWith}`);
console.log();

// 17. trim(): The trim() function is used to remove the white spaces from the start and end of a string.
let stringWithSpaces = "   Hello World!   ";
let trimmedString = stringWithSpaces.trim();
console.log("trim() function:");
console.log(`The string "${stringWithSpaces}" after trimming is: "${trimmedString}".`);
console.log();