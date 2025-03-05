"use strict";
class Person {
    constructor(name, age) {
        this.isLegal = () => {
            return this.age >= 18;
        };
        this.name = name;
        this.age = age;
    }
}
const person = new Person("Sk Sajid", 21);
console.log(person.name, person.age, person.isLegal());
