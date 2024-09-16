interface AnimalBehavior {
    name: string;
    age: number;
    type: string; // Тип тварини, наприклад, "Cat", "Bird", "Fish"
    canFly?: boolean; // Опціональна властивість, що описує можливість літати
    canSwim?: boolean; // Опціональна властивість, що описує можливість плавати

    move(): void; // Метод, що описує рух тварини
}

class Cat implements AnimalBehavior {
    name: string;
    age: number;
    type: string = "Cat";

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} is walking gracefully.`);
    }
}

class Bird implements AnimalBehavior {
    name: string;
    age: number;
    type: string = "Bird";
    canFly: boolean = true; // Птахи можуть літати

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        if (this.canFly) {
            console.log(`${this.name} is flying.`);
        } else {
            console.log(`${this.name} is walking.`);
        }
    }
}

class Fish implements AnimalBehavior {
    name: string;
    age: number;
    type: string = "Fish";
    canSwim: boolean = true; // Риби можуть плавати

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        if (this.canSwim) {
            console.log(`${this.name} is swimming.`);
        } else {
            console.log(`${this.name} is floating.`);
        }
    }
}