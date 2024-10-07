
abstract class Car {
    public brand: string;
    protected model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    abstract displayInfo(): void;

    protected getYear(): number {
        return this.year;
    }
}

class Toyota extends Car {
    private isHybrid: boolean;

    constructor(model: string, year: number, isHybrid: boolean) {
        super('Toyota', model, year);
        this.isHybrid = isHybrid;
    }

    displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Hybrid: ${this.isHybrid}`);
    }
}

class BMW extends Car {
    private horsepower: number;

    constructor(model: string, year: number, horsepower: number) {
        super('BMW', model, year);
        this.horsepower = horsepower;
    }

    displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Horsepower: ${this.horsepower}`);
    }
}

class Ford extends Car {
    private engineType: string;

    constructor(model: string, year: number, engineType: string) {
        super('Ford', model, year);
        this.engineType = engineType;
    }

    displayInfo(): void {
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
