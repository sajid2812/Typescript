interface Address {
  city: string;
  country: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address: Address;
}

interface Office {
  address: Address;
}

const user: User = {
  name: "Sk Sajid",
  age: 21,
  address: {
    city: "Kolkata",
    country: "India",
    pincode: 700088,
  },
};

function isLegal(user: User): boolean {
  return user.age >= 18;
}

console.log(isLegal(user));
