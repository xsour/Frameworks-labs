interface LibraryItem {
    title: string;
    author: string;
    borrowed: boolean;

    borrow(): void;
}

class Book implements LibraryItem {
    title: string;
    author: string;
    borrowed: boolean = false;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        this.borrowed = true;
        console.log(`Книга "${this.title}" позичена.`);
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    borrowed: boolean = false;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        this.borrowed = true;
        console.log(`Журнал "${this.title}" позичений.`);
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    borrowed: boolean = false;
    duration: number;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        this.borrowed = true;
        console.log(`Диск із Фільмом "${this.title}" позичений.`);
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemsByPrefix(prefix: string): void {
        const matchedItems = this.items.filter(item => item.title.toLowerCase().startsWith(prefix.toLowerCase()));

        if (matchedItems.length > 0) {
            console.log(`Знайдено: '${prefix}':`);
            matchedItems.forEach(item => console.log(`- ${item.title} by ${item.author}`));
        } else {
            console.log(`Не знайдено або вказана неправильна назва '${prefix}'.`);
        }
    }

    listAvailableItems(): void {
        console.log("В наявності:");
        this.items.forEach(item => {
            if (!item.borrowed) {
                console.log(`- ${item.title} - ${item.author}`);
            }
        });
    }
}

// Робота бібліотеки

const myLibrary = new Library();

const book1 = new Book("Відьмак: Останнє бажання", "Анджей Сапковський", 288);
const magazine1 = new Magazine("Локальна історія", "Українська Галицька Асамблея", 4);
const dvd1 = new DVD("Бійцівський клуб", "Девід Фінчер", 139);

myLibrary.addItem(book1);
myLibrary.addItem(magazine1);
myLibrary.addItem(dvd1);

console.log("До того як елементи були позичені:");
myLibrary.listAvailableItems();

book1.borrow();

console.log("\nПісля позичання: ");
myLibrary.listAvailableItems();

/*
const foundItem = myLibrary.findItemByName("Бійцівський клу");
if (foundItem) {
    console.log(`\nЗнайдено: ${foundItem.title} - ${foundItem.author}`);
}
else{
    console.log('\nНемає в наявності або неправильна назва');
}
*/
// Test with a prefix that matches items
myLibrary.findItemsByPrefix("з");

// Test with a prefix that does not match any items
myLibrary.findItemsByPrefix("Ло");