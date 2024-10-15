interface AnimalBehavior {
    name: string;
    age: number;
    type: string;
    canFly?: boolean;
    canSwim?: boolean;

    move(): void;
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
    canFly: boolean = true;

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
    canSwim: boolean = true;

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

const myCat = new Cat('Мурка', 3);
const myBird = new Bird('Снігур', 2);
const myFish = new Fish('Злата', 1);

myCat.move();
myBird.move();
myFish.move();