"use strict";
const user = {
    name: "Sk Sajid",
    age: 21,
    address: {
        city: "Kolkata",
        country: "India",
        pincode: 700088,
    },
};
function isLegal(user) {
    return user.age >= 18;
}
console.log(isLegal(user));
