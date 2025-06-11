/* 
Practice exercise 6.2
    We are going to create a program that will randomly describe an inputted name.
        1. Create an array of descriptive words.
        2. Create a function that contains a prompt asking the user for a name.
        3. Select a random value from the array using Math.random.
        4. Output into the console the prompt value and the randomly selected array
        value.
        5. Invoke the function.
*/
arrayOfDiscriptiveWords = ['Gold Digger', 'Skibidi', 'Sigma', 'Giga Chad'];
function namePrompt() {
    let userName = prompt(`What is your name?`);
    let min = 0;
    let max = 3;
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let result = arrayOfDiscriptiveWords[randomNumber];
    console.log(`${result} ${userName}`);
}
namePrompt();
