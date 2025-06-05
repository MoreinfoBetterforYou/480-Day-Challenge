let min = 0;
let max = 2;
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);;
let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[randomNumber];
let userChoice = prompt("Please enter your choice (rock, paper, or scissors):");
if (userChoice === computerChoice) {
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. It is a tie`);
}
else if((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win.`);
}
else {
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You lose.`);
}