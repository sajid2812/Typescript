// type User = {
//   readonly name: string;
//   readonly age: number;
// };

type User = {
  name: string;
  age: number;
};

const user: Readonly<User> = {
  name: "Sk Sajid",
  age: 24,
};

console.log(user);
