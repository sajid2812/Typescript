"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hi hello");
    }
}
class Employee extends User {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi " + this.name;
    }
}
const person = new Employee("Sk Sajid");
console.log(person.greet());
