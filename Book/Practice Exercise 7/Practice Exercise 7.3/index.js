/* 
Practice exercise 7.3
    Create a class that contains properties for different animal species and the sound that
    each species makes, and create two (or more) animals:
        1. Create a method that prints a given animal and its sound.
        2. Add a prototype with another action for the animal.
        3. Output an entire animal object into the console.
*/
class AnimalSpecies{
    constructor(animalSpecies, sound){
        this.animalSpecies = animalSpecies;
        this.sound = sound;
    }
    method() {
        console.log(`The ${this.animalSpecies} makes the sound ${this.sound}`);
    }
}
AnimalSpecies.prototype.eat = function (food) {
    console.log(`The ${this.animalSpecies} is eating ${food}`);
}
const myFirstAnimal = new AnimalSpecies('Lion', 'Roar');
const mySecondAnimal = new AnimalSpecies('Dog', 'Bark, Bark');
console.log(myFirstAnimal);