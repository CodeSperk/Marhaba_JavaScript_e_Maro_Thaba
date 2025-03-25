// problem 1
const price = [30, 46, 20, 60, 10];
const increaseBy10 = price.map((item) => item + 13);

// problem 2
const names = ["Messi", "Maradona", "Pele", "Zidane", "Ronaldo"];
const longerNames = names.filter((name) => name.length > 5);

// problem 3
const nums = [12, 43, 12, 23, 14, 17, 45];
const greaterThan20 = nums.find((num) => num > 20);

// problem 4
const height = [43, 53, 64, 26, 74];
const tallerThan69 = height.filter((p) => p > 69);

// problem 5
const numbers = [7, 10, 15, 20, 25, 30];
numbers.map((num) => console.log(num / 3));

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
newNums.forEach((n) => console.log(n));

// problem 9
const animals = ["Cow", "Dog", "Sheep", "Horse"];
animals.forEach((animal) => console.log(animal));
