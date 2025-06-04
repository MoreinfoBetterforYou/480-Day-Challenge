/* 
Practice exercise 4.5
    1. Create a variable called prize and use a prompt to ask the user to set the
    value by selecting a number between 0 and 10
    2. Convert the prompt response to a number data type
    3. Create a variable to use for the output message containing the value "My
    Selection: "
    4. Using the switch statement (and creativity), provide a response back
    regarding a prize that is awarded depending on what number is selected
    5. Use the switch break to add combined results for prizes
    6. Output the message back to the user by concatenating your prize variable
    strings and the output message string
*/
    let prize = prompt(`Please enter your prize value between 0 and 10`);
    prize = Number(prize);
    let gift;
    let message = `My Selection: `;
    switch(prize){
        case 0:
        case 1:
            gift = "You get a ferrari.";
            break;
        case 2:
        case 3:
            gift = "You get a Buggati.";
            break;
        case 4:
        case 5:
            gift = "You get a Lambroghini";
            break;
        case 6:
        case 7:
            gift = "You get a mclearn.";
            break;
        case 8:
        case 9:
            gift = "You get a Porsche.";
            break;
        case 10:
            gift = "You get a Tesla";
            break;
        default:
            gift = undefined;
            break;
    }
    console.log(message + gift);

