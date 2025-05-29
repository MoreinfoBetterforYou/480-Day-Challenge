/* Practice exercise 3.1
1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
"Apples."
2. Check your list length in the console.
3. Update "Bread" to "Bananas."
4. Output your entire list to the console */
const shoppingList = ["Milk", "Bread", "Apples"];
const lengthOfMyShoppingList = shoppingList.length;
console.log(`The length of my list is ${lengthOfMyShoppingList}`);
shoppingList[1] = "Bannanas";
console.log(`My shopping list is: ${shoppingList}`);