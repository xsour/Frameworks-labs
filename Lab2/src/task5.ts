
interface Course {
    name: string;
    duration: number; // в годинах
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} зареєстрований на курс ${this.name}.`);
        } else {
            console.log(`${student} вже зареєстрований на курс ${this.name}.`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[];

    constructor() {
        this.courses = [];
    }

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс ${course.name} додано.`);
    }

    removeCourse(courseName: string): void {
        const index = this.courses.findIndex(course => course.name === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Курс ${courseName} видалено.`);
        } else {
            console.log(`Курс ${courseName} не знайдено.`);
        }
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name === courseName);
    }

    listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Курс: ${course.name}, Тривалість: ${course.duration} годин, Студенти: ${course.students.join(', ') || 'Немає'}`);
        });
    }
}

// Демонстрація використання
const course1 = new OnlineCourse('TypeScript Basics', 40);
const course2 = new OnlineCourse('Advanced JavaScript', 60);
const course3 = new OnlineCourse('Web Development', 80);

const manager = new CourseManager();

manager.addCourse(course1);
manager.addCourse(course2);
manager.addCourse(course3);

// Реєстрація студентів
course1.registerStudent('Андрій');
course1.registerStudent('Олена');
course2.registerStudent('Ігор');
course3.registerStudent('Світлана');
course3.registerStudent('Олег');
course3.registerStudent('Андрій'); // Перевірка повторної реєстрації

// Виведення курсів
console.log('\nСписок курсів:');
manager.listCourses();

// Видалення курсу
manager.removeCourse('Advanced JavaScript');

// Виведення після видалення
console.log('\nСписок курсів після видалення:');
manager.listCourses();
