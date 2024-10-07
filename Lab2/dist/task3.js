"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getYear() {
        return this.year;
    }
}
class Toyota extends Car {
    constructor(model, year, isHybrid) {
        super('Toyota', model, year);
        this.isHybrid = isHybrid;
    }
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Hybrid: ${this.isHybrid}`);
    }
}
class BMW extends Car {
    constructor(model, year, horsepower) {
        super('BMW', model, year);
        this.horsepower = horsepower;
    }
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Horsepower: ${this.horsepower}`);
    }
}
class Ford extends Car {
    constructor(model, year, engineType) {
        super('Ford', model, year);
        this.engineType = engineType;
    }
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Engine Type: ${this.engineType}`);
    }
}
// Демонстрація використання
const toyota1 = new Toyota('Camry', 2020, true);
const toyota2 = new Toyota('Corolla', 2019, false);
const bmw1 = new BMW('X5', 2021, 300);
const bmw2 = new BMW('M3', 2022, 473);
const ford1 = new Ford('F-150', 2018, 'V6');
const ford2 = new Ford('Mustang', 2023, 'V8');
toyota1.displayInfo();
toyota2.displayInfo();
bmw1.displayInfo();
bmw2.displayInfo();
ford1.displayInfo();
ford2.displayInfo();
