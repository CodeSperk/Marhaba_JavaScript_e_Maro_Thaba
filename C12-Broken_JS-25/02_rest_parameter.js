//problem 1
const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};
const { name, ...rest } = product;

//problem 2
const project = {
  id: 101,
  title: "Web App",
  budget: 3000,
  client: "Tech corp",
};
const { title, ...remaining } = project;

//problem 3
const programmer = {
  name: "Sophia",
  language: "JavaScript",
  experience: 5,
  specialty: "Frontend",
  tools: "React",
};

//problem 4
const numsArray = [10, 20, 3, 30, 300, 3000];
const [num1, num2, ...restNums] = numsArray;

//problem 5
const restSum = (a, b, ...rest) => {
  let sum = 0;
  for (const num of rest) {
    sum += num;
  }
  return sum;
};
// const result = restSum(2, 3, 4, 5, 6);

//problem 6
const getAverage = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
};
const result = getAverage(2, 3, 4, 5, 6);
console.log(result);
