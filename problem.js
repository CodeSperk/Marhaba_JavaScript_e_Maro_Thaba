// problem 1
const price = [30, 45, 120, 60, 10];
const greaterThanHundred = price.some((item) => item > 100);

// problem 2
const nums = [12, 43, 12, 23, 14, 17, 45];
const isDivisableBy5 = nums.every((num) => num % 5 === 0);

// problem 3
const ages = [23, 17, 18, 20];
const isAdult = ages.every((age) => age > 18);
console.log(isAdult);

// problem 4
const height = [43, 53, 64, 26, 74];
const tallerThan69 = height.filter((p) => p > 69);

// problem 5
const numbers = [7, 10, 15, 20, 25, 30];
// numbers.map((num) => console.log(num / 3));

// problem 6
const friends = [
  "Leonardo",
  "Brad pit",
  "Kate Winslet",
  "Audrey Hepburn",
  "Johnny Depp",
];
const thirdLetters = friends.map((friend) => friend[2]);

// problem 7
const persons = ["Tom", "Harry", "Sam", "Jack"];
const startsWithH = persons.filter((name) => name[0] === "H");

// problem 8
const newNums = [1, 2, 3, 4, 5];
// newNums.forEach((n) => console.log(n));

// problem 9
const animals = ["Cow", "Dog", "Sheep", "Horse"];
// animals.forEach((animal) => console.log(animal));
