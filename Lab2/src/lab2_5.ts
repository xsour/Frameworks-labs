interface Course {
    courseName: string;
    duration: number; // тривалість в годинах
    students: string[];
}

class OnlineCourse implements Course {
    public courseName: string;
    public duration: number;
    public students: string[];

    constructor(courseName: string, duration: number) {
        this.courseName = courseName;
        this.duration = duration;
        this.students = [];
    }

    public registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} has been registered for ${this.courseName}`);
        } else {
            console.log(`${student} is already registered for ${this.courseName}`);
        }
    }

    public isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    public addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`${course.courseName} has been added.`);
    }

    public removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.courseName !== courseName);
        console.log(`${courseName} has been removed.`);
    }

    public findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.courseName === courseName);
    }

    public listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Course: ${course.courseName}, Duration: ${course.duration} hours`);
            console.log(`Registered Students: ${course.students.join(', ')}`);
        });
    }
}

// Створення екземплярів курсів
const course1 = new OnlineCourse('TypeScript Basics', 20);
const course2 = new OnlineCourse('Advanced TypeScript', 30);

// Реєстрація студентів
course1.registerStudent('Alice');
course1.registerStudent('Bob');
course2.registerStudent('Charlie');
course2.registerStudent('Alice'); // Alice is already registered for Advanced TypeScript

// Створення екземпляра CourseManager
const manager = new CourseManager();

// Додавання курсів до CourseManager
manager.addCourse(course1);
manager.addCourse(course2);

// Виведення списку курсів
manager.listCourses();

// Видалення курсу
manager.removeCourse('Advanced TypeScript');

// Виведення оновленого списку курсів
manager.listCourses();
