//problem 1
const book = {
  name: "Marhaba, JavaScript e maro Thaba",
  author: "Jhonkar Mahbub",
  price: 545,
};
const keys = Object.keys(book);
const values = Object.values(book);

//problem 2
const article = {
  title: "Learning Js",
  category: "Programming",
};
const hasAuthor = Object.keys(article).includes("author");

//problem 3
const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 45000,
};
for (const key in laptop) {
  const result = key + " : " + laptop[key];
  console.log(result);
}

//problem 4
const phone = {
  brand: "Samsung",
  model: "Galaxy s21",
  price: 85000,
};
const keysOfPhone = Object.keys(phone);
for (const key of keysOfPhone) {
  console.log(key + " : " + phone[key]);
}

//problem 5
const bike = {
  brand: "Hero",
  model: "Splendor",
  price: 12000,
};
const bikeValues = Object.values(bike);
console.log(bikeValues);

//problem 6
const books = {
  book1: "Harry Poter",
  book2: "The Hobit",
  book3: "Game of Thrones",
};
for (const book in books) {
  console.log("Book Names : ", books[book]);
}

//problem 7
const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};
let sum = 0;
for (const num in numbers) {
  sum += numbers[num];
}
console.log(sum);

//problem 8
const player = {
  name: "Messi",
  team: "Argentina",
  goal: 91,
};
const playerValues = Object.values(player);
console.log(playerValues);

//problem 9
const buildings = {
  floor: 10,
  address: {
    street: "Main Road",
    city: "Dhaka",
  },
  type: "commercial",
};

for (const prop in buildings) {
  if (typeof buildings[prop] === "object" && buildings[prop] !== null) {
    for (const key in buildings[prop]) {
      console.log(`${prop}.${key} : ${buildings[prop][key]}`);
    }
  } else {
    console.log(prop + " : " + buildings[prop]);
  }
}
