let name = prompt(`Please enter your name.`);
let friends = ["Alice", "Bob", "Charlie", "David", "Eve"];
switch(name) {
    case "Alice":
        console.log(`Hi Alice! You are a good friend.`);
        break;
    case 'Bob':
        console.log(`Hi Bob! You are a good friend.`);
        break;
    case "Chris":
        console.log(`Hi Chris! You are a good friend.`);
        break;
    case "David":
        console.log(`Hi David! You are a good friend.`);
        break;
    case '':
        console.log(`You didn't enter a name.`);
        break;
    case null:
        console.log(`You didn't enter a name.`);
        break;
    default:
        console.log(`Hi ${name}! You are not in the friends list.`);
}