function greet(firstName: string) {
  console.log(`Hello ${firstName}`);
}

function sum(a: number, b: number): number {
  return a + b;
}

function isValid(age: number): boolean {
  return age >= 18;
}

function delayedFn() {
  console.log("hello world");
}

function mainFunction(fn: () => void) {
  setTimeout(fn, 1000);
}

// greet("Sk Sajid");
// console.log(sum(2, 3));
// console.log(isValid(19));
mainFunction(delayedFn);
