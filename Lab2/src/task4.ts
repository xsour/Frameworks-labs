
interface Payable {
    pay(): void;
}

abstract class Employee {
    public name: string;
    protected age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;

    protected getSalary(): number {
        return this.salary;
    }
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.getSalary() * 0.10;
    }

    pay(): void {
        console.log(`${this.name} отримав заробітну плату: ${this.getSalary()}`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.getSalary() * 0.20;
    }

    pay(): void {
        console.log(`${this.name} отримав заробітну плату: ${this.getSalary()}`);
    }
}

// Демонстрація використання
const employees: Employee[] = [
    new Developer('Іван', 28, 50000),
    new Developer('Марія', 32, 60000),
    new Manager('Олег', 40, 80000),
    new Manager('Світлана', 35, 75000)
];

let totalBonus = 0;

employees.forEach(emp => {
    totalBonus += emp.getAnnualBonus();
});

console.log(`Загальна сума бонусів: ${totalBonus}`);
