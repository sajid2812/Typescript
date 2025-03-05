function greet(firstName: string) {
  console.log(`Hello ${firstName}`);
}

function sum(a: number, b: number): number {
  return a + b;
}

function isValid(age: number): boolean {
  return age >= 18;
}
greet("Sk Sajid");
console.log(sum(2, 3));
console.log(isValid(19));
