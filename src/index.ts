interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UserProfile = Pick<User, "name" | "age" | "email">;
const updateUser = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

updateUser({ name: "Sk Sajid", age: 21, email: "ssk73573@gmail.com" });
