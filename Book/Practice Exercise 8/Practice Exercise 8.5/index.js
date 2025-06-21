/* 
Practice exercise 8.5
    Using the replace() string method, complete this vowel replacer exercise by
    replacing the vowels in a string with numbers. You can start with this string:
    I love JavaScript
    And turn it into something like the following:
    2 l3v1 j0v0scr2pt
    Take the following steps:
        1. Create the previously specified string, and convert it to lowercase.
        2. Create an array containing the vowels: a, e, i, o, u.
        3. Loop through each letter you have in the array, and output the current letter
        into the console so that you can see which letter will be converted.
        4. Within the loop, using replaceAll() update each vowel substring with the
        index value of the letter from the vowel array.
        5. Once the loop completes output the result of the new string into the console.
*/
let string = 'I love JavaScript';
let lowerCaseString = string.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
vowels.forEach((vowel, index) => {
    lowerCaseString = lowerCaseString.replaceAll(vowel, index)
})
console.log(lowerCaseString);