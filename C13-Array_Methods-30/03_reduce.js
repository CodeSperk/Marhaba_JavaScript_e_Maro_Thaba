// problem 1
const array = [50, 12, 25, 8, 15];
const sum = array.reduce((acc, current) => acc + current, 0);

// problem 2
const products = [
  {
    name: "shampoo",
    price: 100,
  },
  {
    name: "soap",
    price: 50,
  },
  {
    name: "toothpast",
    price: 75,
  },
];
const totalPrice = products.reduce((acc, current) => acc + current.price, 0);

// problem 3
const productsList = [
  {
    name: "pen",
    price: 5,
  },
  {
    name: "Book",
    price: 50,
  },
  {
    name: "Bag",
    price: 100,
  },
];
const totalProductPrice = productsList.reduce(
  (acc, current) => acc + current.price,
  0
);

// problem 4
const nums = [1, 2, 3, 4, 5];
const productOfNums = nums.reduce((a, c) => a * c, 1);

// problem 5
const numbers = [10, 20, 30, 40, 50, 35];
const maxNumber = numbers.reduce((a, c) => {
  return a > c ? a : c;
}, 0);

// problem 6
const numsArr = [100, 200, 300, 400];
const sumOfNumsArr = numsArr.reduce((a, c) => a + c, 50);
