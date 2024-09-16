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
