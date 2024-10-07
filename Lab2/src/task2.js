"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
    scale(factor) {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}
// Демонстрація використання
const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5),
    new Circle(2.5),
    new Rectangle(10, 2)
];
// Масштабуємо всі фігури на 2
shapes.forEach(shape => shape.scale(2));
let totalArea = 0;
let totalPerimeter = 0;
shapes.forEach(shape => {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
});
console.log(`Загальна площа: ${totalArea.toFixed(2)}`);
console.log(`Загальний периметр: ${totalPerimeter.toFixed(2)}`);
