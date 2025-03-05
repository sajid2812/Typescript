"use strict";
function greet(firstName) {
    console.log(`Hello ${firstName}`);
}
function sum(a, b) {
    return a + b;
}
function isValid(age) {
    return age >= 18;
}
function delayedFn() {
    console.log("hello world");
}
function mainFunction(fn) {
    setTimeout(fn, 1000);
}
// greet("Sk Sajid");
// console.log(sum(2, 3));
// console.log(isValid(19));
mainFunction(delayedFn);
