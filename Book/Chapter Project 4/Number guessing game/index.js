let max = 100;
let min = 1;
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
let userGuess = prompt(`Input a number between ${min} and ${max}.`);
userGuess = Number(userGuess);

if (userGuess === null || userGuess === ""){
    console.log(`You didn't enter a number.`);
    
}
else if(userGuess === NaN){
    console.log(`You didn't enter a valid number.`);	
}
else if(userGuess < min){
    console.log(`Your guess is too low. Please enter a number between ${min} and ${max}.`);
}
else if(userGuess > max){
    console.log(`Your guess is too high. Please enter a number between ${min} and ${max}.`);
}
else{
    if(userGuess > randomNumber){
        console.log(`Your guess of ${userGuess} is too high. The number was ${randomNumber}`);
    }
    else if(userGuess < randomNumber){
        console.log(`Your guess of ${userGuess} is too low. The number was ${randomNumber}`);
    }
    else{
        console.log(`Congratulations! You guessed the number ${randomNumber} correctly.`);
    }
}