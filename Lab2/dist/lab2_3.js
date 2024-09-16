"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
class Toyota extends Car {
    constructor(model, year, fuelType) {
        super("Toyota", model, year);
        this.fuelType = fuelType;
    }
    describe() {
        console.log(`Toyota ${this.model} (${this.year}), Fuel type: ${this.fuelType}`);
    }
}
class BMW extends Car {
    constructor(model, year, engineCapacity) {
        super("BMW", model, year);
        this.engineCapacity = engineCapacity;
    }
    describe() {
        console.log(`BMW ${this.model} (${this.year}), Engine Capacity: ${this.engineCapacity}L`);
    }
}
class Tesla extends Car {
    constructor(model, year, batteryCapacity) {
        super("Tesla", model, year);
        this.batteryCapacity = batteryCapacity;
    }
    describe() {
        console.log(`Tesla ${this.model} (${this.year}), Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}
const toyotaCamry = new Toyota("Camry", 2020, "Petrol");
const toyotaPrius = new Toyota("Prius", 2021, "Hybrid");
const bmwX5 = new BMW("X5", 2019, 3.0);
const bmwM3 = new BMW("M3", 2022, 4.0);
const teslaModelS = new Tesla("Model S", 2023, 100);
const teslaModel3 = new Tesla("Model 3", 2022, 75);
// Виведення інформації про автомобілі
toyotaCamry.describe();
toyotaPrius.describe();
bmwX5.describe();
bmwM3.describe();
teslaModelS.describe();
teslaModel3.describe();
