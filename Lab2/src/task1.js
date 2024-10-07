"use strict";
class Cat {
    constructor(name, age) {
        this.type = "Cat";
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} is walking gracefully.`);
    }
}
class Bird {
    constructor(name, age) {
        this.type = "Bird";
        this.canFly = true; // Птахи можуть літати
        this.name = name;
        this.age = age;
    }
    move() {
        if (this.canFly) {
            console.log(`${this.name} is flying.`);
        }
        else {
            console.log(`${this.name} is walking.`);
        }
    }
}
class Fish {
    constructor(name, age) {
        this.type = "Fish";
        this.canSwim = true; // Риби можуть плавати
        this.name = name;
        this.age = age;
    }
    move() {
        if (this.canSwim) {
            console.log(`${this.name} is swimming.`);
        }
        else {
            console.log(`${this.name} is floating.`);
        }
    }
}
// Демонстрація використання
const myCat = new Cat('Мурка', 3);
const myBird = new Bird('Снігур', 2);
const myFish = new Fish('Злата', 1);
myCat.move(); // Мурка is walking gracefully.
myBird.move(); // Снігур is flying.
myFish.move(); // Злата is swimming.
