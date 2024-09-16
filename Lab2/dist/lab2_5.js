"use strict";
class OnlineCourse {
    constructor(courseName, duration) {
        this.courseName = courseName;
        this.duration = duration;
        this.students = [];
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} has been registered for ${this.courseName}`);
        }
        else {
            console.log(`${student} is already registered for ${this.courseName}`);
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
        console.log(`${course.courseName} has been added.`);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter(course => course.courseName !== courseName);
        console.log(`${courseName} has been removed.`);
    }
    findCourse(courseName) {
        return this.courses.find(course => course.courseName === courseName);
    }
    listCourses() {
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
