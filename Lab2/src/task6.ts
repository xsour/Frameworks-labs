
interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    pageCount: number;

    constructor(title: string, author: string, pageCount: number) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Книгу "${this.title}" позичено.`);
        } else {
            console.log(`Книга "${this.title}" вже позичена.`);
        }
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Журнал "${this.title}" позичено.`);
        } else {
            console.log(`Журнал "${this.title}" вже позичений.`);
        }
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    duration: number; // в хвилинах

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD "${this.title}" позичено.`);
        } else {
            console.log(`DVD "${this.title}" вже позичено.`);
        }
    }
}

class Library {
    private items: LibraryItem[];

    constructor() {
        this.items = [];
    }

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Додано "${item.title}" до бібліотеки.`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title === name);
    }

    listAvailableItems(): void {
        const available = this.items.filter(item => !item.isBorrowed);
        console.log('Доступні елементи бібліотеки:');
        available.forEach(item => {
            console.log(`- ${item.title} by ${item.author}`);
        });
    }
}

// Демонстрація використання
const library = new Library();

// Додавання елементів
const book1 = new Book('Війна і мир', 'Лев Толстой', 1225);
const book2 = new Book('1984', 'Джордж Орвелл', 328);
const magazine1 = new Magazine('National Geographic', 'Various', 202);
const dvd1 = new DVD('Inception', 'Christopher Nolan', 148);
const dvd2 = new DVD('The Matrix', 'The Wachowskis', 136);

library.addItem(book1);
library.addItem(book2);
library.addItem(magazine1);
library.addItem(dvd1);
library.addItem(dvd2);

// Позичення елементів
book1.borrow();
dvd1.borrow();
dvd1.borrow(); // Спроба повторного позичення

// Виведення доступних елементів
console.log('\n');
library.listAvailableItems();

// Пошук елементу
const searchItem = library.findItemByName('1984');
if (searchItem) {
    console.log(`\nЗнайдено: ${searchItem.title} by ${searchItem.author}`);
} else {
    console.log('Елемент не знайдено.');
}
