abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    public getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    public pay(): void {
        console.log(`Paying ${this.name} an amount of ${this.salary}`);
    }
}

class Manager extends Employee implements Payable {
    public getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    public pay(): void {
        console.log(`Paying ${this.name} an amount of ${this.salary}`);
    }
}

const employees: Employee[] = [
    new Developer('Alice', 30, 70000),
    new Developer('Bob', 28, 65000),
    new Manager('Charlie', 45, 90000),
    new Manager('Diana', 50, 120000)
];

let totalBonuses = 0;

for (const employee of employees) {
    totalBonuses += employee.getAnnualBonus();
    (employee as unknown as Payable).pay();  // Виклик методу pay()
}

console.log(`Total annual bonuses for all employees: $${totalBonuses}`);