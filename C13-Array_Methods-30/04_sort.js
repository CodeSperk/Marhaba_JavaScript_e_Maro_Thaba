// problem 1
const numbers = [50, 12, 25, 8, 15];
const sorted = numbers.sort((a, b) => a - b);

// problem 2
const nums = [13, 2, 45, 9, 6];
const descendingOrder = nums.sort((a, b) => b - 1);

// problem 3
const ages = [
  {
    name: "Ali",
    age: "29",
  },
  {
    name: "Sara",
    age: 22,
  },
  {
    name: "Tariq",
    age: 35,
  },
];
const sortedArray = ages.sort((a, b) => a.age - b.age);

// problem 4
const names = ["Tom", "Harry", "Sam", "Jack"];
const sortedNames = names.sort();
