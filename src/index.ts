abstract class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract greet(): string;
  hello() {
    console.log("hi hello");
  }
}

class Employee extends User {
  name: string;
  constructor(name: string) {
    super(name);
    this.name = name;
  }

  greet() {
    return "hi " + this.name;
  }
}

const person = new Employee("Sk Sajid");
console.log(person.greet());
