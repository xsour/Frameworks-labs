"use strict";
class OnlineCourse {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} зареєстрований на курс ${this.name}.`);
        }
        else {
            console.log(`${student} вже зареєстрований на курс ${this.name}.`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
        console.log(`Курс ${course.name} додано.`);
    }
    removeCourse(courseName) {
        const index = this.courses.findIndex(course => course.name === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Курс ${courseName} видалено.`);
        }
        else {
            console.log(`Курс ${courseName} не знайдено.`);
        }
    }
    findCourse(courseName) {
        return this.courses.find(course => course.name === courseName);
    }
    listCourses() {
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
