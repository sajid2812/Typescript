interface People {
  name: string;
  age: number;
  isLegal: () => boolean;
}

class Person implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  isLegal = () => {
    return this.age >= 18;
  };
}

const person = new Person("Sk Sajid", 21);
console.log(person.name, person.age, person.isLegal());
