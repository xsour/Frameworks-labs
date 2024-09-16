"use strict";
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    getAnnualBonus() {
        return this.salary * 0.10;
    }
    pay() {
        console.log(`Paying ${this.name} an amount of ${this.salary}`);
    }
}
class Manager extends Employee {
    getAnnualBonus() {
        return this.salary * 0.20;
    }
    pay() {
        console.log(`Paying ${this.name} an amount of ${this.salary}`);
    }
}
const employees = [
    new Developer('Alice', 30, 70000),
    new Developer('Bob', 28, 65000),
    new Manager('Charlie', 45, 90000),
    new Manager('Diana', 50, 120000)
];
let totalBonuses = 0;
for (const employee of employees) {
    totalBonuses += employee.getAnnualBonus();
    employee.pay(); // Виклик методу pay()
}
console.log(`Total annual bonuses for all employees: $${totalBonuses}`);
