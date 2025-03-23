//problem 1
const headphone = {
  brand: "Sony",
  price: 300,
  color: "red",
};
Object.freeze(headphone);
headphone.age = 12;
delete headphone.color;
headphone.brand = "Samsung";

// problem 2
const player = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami",
};
Object.freeze(player);
player.age = 31;

// problem 3
const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 500,
};
Object.seal(book);
book.author = "Joanne Kathleen Rowling";

// problem 4
const gadget = {
  name: "I-phone",
  price: 12000,
  color: "black",
};
delete gadget.price;

// problem 5
const animal = {
  name: "Tiger",
  location: "Sundarban",
};
Object.freeze(animal);

// problem 6
const food = {
  name: "Pizza",
  price: 500,
  size: "Large",
};
Object.seal(food);
food.rating = 8;
food.price = 350;
