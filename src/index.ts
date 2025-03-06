type User = {
  id: string;
  name: string;
};

type Users = Record<string, User>;

const users: Users = {
  abc: {
    id: "abc",
    name: "sajid",
  },
};

const map = new Map<string, User>();
map.set("123", { id: "123", name: "sk sajid" });
