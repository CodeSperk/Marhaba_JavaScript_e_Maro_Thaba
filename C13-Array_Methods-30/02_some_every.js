// problem 1
const price = [30, 45, 120, 60, 10];
const greaterThanHundred = price.some((item) => item > 100);

// problem 2
const nums = [12, 43, 12, 23, 14, 17, 45];
const isDivisableBy5 = nums.every((num) => num % 5 === 0);
//problem 3
const words = ["hello", "There", "fine"];
const hasHello = words.some((word) => word === "hello");
console.log(hasHello);
// problem 4
const ages = [23, 17, 18, 20];
const isAdult = ages.every((age) => age > 18);
console.log(isAdult);
