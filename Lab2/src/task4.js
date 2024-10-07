"use strict";
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Developer extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.getSalary() * 0.10;
    }
    pay() {
        console.log(`${this.name} отримав заробітну плату: ${this.getSalary()}`);
    }
}
class Manager extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.getSalary() * 0.20;
    }
    pay() {
        console.log(`${this.name} отримав заробітну плату: ${this.getSalary()}`);
    }
}
// Демонстрація використання
const employees = [
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
