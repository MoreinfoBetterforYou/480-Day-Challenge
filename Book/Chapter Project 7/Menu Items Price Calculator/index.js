class Menu{
    #priceOfProduct1 = 15;
    #priceOfProduct2 = 20;
    constructor(numberOfProduct1, numberOfProduct2) {
        this.numberOfProduct1 = numberOfProduct1;
        this.numberOfProduct2 = numberOfProduct2;
    }
    totalCost() {
        return (this.numberOfProduct1 * this.#priceOfProduct1) + (this.numberOfProduct2 * this.#priceOfProduct2);
    }
    get cost() {
        return this.totalCost();
    }
}
const option1 = new Menu(6, 7);
const option2 = new Menu(4, 6);
const option3 = new Menu(15, 14);
console.log(`$${option1.cost}`);
console.log(`$${option2.cost}`);
console.log(`$${option3.cost}`);