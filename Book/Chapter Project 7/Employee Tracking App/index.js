class Employees{
    #firstName;
    #lastName;
    #service;
    constructor(firstName, lastName, service){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#service = service;
    }
    get firstName() {
        return this.#firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    get service() {
        return this.#service;
    }
}
const Employee1 = new Employees('Bob', 'Ross', 20);
const Employee2 = new Employees('John', 'Doe', 15);
const arrayOfEmployees = [Employee1, Employee2];
Employees.prototype.description = function () {
    return `${this.firstName} ${this.lastName} has been an employee for ${this.service} years.`;
}
for (let employee of arrayOfEmployees){
    console.log(employee.description());
}