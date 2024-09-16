abstract class Car {
    public brand: string;  // Назва бренду, доступна зовні
    protected model: string;  // Назва моделі, доступна у спадкоємних класах
    protected readonly year: number;  // Рік випуску, доступний лише у межах класу

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    abstract describe(): void;  // Абстрактний метод, який потрібно реалізувати у похідних класах
}

class Toyota extends Car {
    public fuelType: string;

    constructor(model: string, year: number, fuelType: string) {
        super("Toyota", model, year);
        this.fuelType = fuelType;
    }

    public describe(): void {
        console.log(`Toyota ${this.model} (${this.year}), Fuel type: ${this.fuelType}`);
    }
}

class BMW extends Car {
    public engineCapacity: number;

    constructor(model: string, year: number, engineCapacity: number) {
        super("BMW", model, year);
        this.engineCapacity = engineCapacity;
    }

    public describe(): void {
        console.log(`BMW ${this.model} (${this.year}), Engine Capacity: ${this.engineCapacity}L`);
    }
}

class Tesla extends Car {
    public batteryCapacity: number;

    constructor(model: string, year: number, batteryCapacity: number) {
        super("Tesla", model, year);
        this.batteryCapacity = batteryCapacity;
    }

    public describe(): void {
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