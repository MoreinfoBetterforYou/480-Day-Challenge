/* 
Practice exercise 5.7
    In this exercise, we will experiment with looping over objects and internal arrays.
        1. Create a simple object with three items in it.
        2. Using the for in loop, get the properties' names and values from the object
        and output them into the console.
        3. Create an array containing the same three items. Using either the for loop or
        the for in loop, output the values from the array into the console.
*/
let myObject = {
    name: 'M. Hassan Farooq',
    age: 15,
    city: 'Rawalpindi'
}
for (let key in myObject){
    console.log(key);
    console.log(myObject[key]);
}
let array = ['M. Hassan Farooq', 15, "Rawalpindi"];
for(let element of array){
    console.log(element);
}