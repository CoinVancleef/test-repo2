const data: {
  name: string;
  age: number;
  email: string;
  isLoggedIn: boolean;
}[] = [
  {
    name: "Joe Schmoe",
    age: 23,
    email: "joe@schmoe.com",
    isLoggedIn: true,
  },
  {
    name: "Alice Margatroid",
    age: 20,
    email: "alicemarga@ukr.net",
    isLoggedIn: false,
  },
  {
    name: "Yukari Yakumo",
    age: 1500,
    email: "yukaripurple@gensokyo.com",
    isLoggedIn: true,
  },
];

function welcome(name: string): string {
  const user = data.find((el) => el.name === name);
  if (user?.isLoggedIn) {
    return `Welcome back, ${name}`;
  } else {
    return `Please log in`;
  }
}

console.log(welcome("Alice Margatroid"));
