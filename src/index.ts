type GoodUser = {
  name: string;
  gift: string;
};

type BadUser = {
  name: string;
  ip: string;
};

type User = GoodUser | BadUser;

const user: User = {
  name: "sajid",
  ip: "skdfklj",
};
