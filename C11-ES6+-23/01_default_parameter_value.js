//problem 01
function getSome(n1 = 0, n2 = 0, n3 = 0) {
  const sum = n1 + n2 + n3;
  return sum;
}
// const result = getSome();

//problem 02
function savings(money = 0) {
  const reservedMoney = 50;
  const totalSavings = reservedMoney + money;
  return totalSavings;
}
// const result = savings();

//problem 03
function personIncome(name = "Anonymous", income = 0) {
  return `Monthly income of ${name} : ${income}/= Taka`;
}
// const result = personIncome();

//problem 04
function getSquare(num = 1) {
  const square = num * num;
  return square;
}
// const result = getSquare(12);

//problem 05
function productPrice(name = "Unknown Product", price = 1) {
  return `The ${name} price is : ${price}`;
}
// const result = productPrice();

//problem 06
function favBooks(booksArr = ["Js Book"]) {
  return `My favourite books is/are : ${booksArr}`;
}
// const result = favBooks();

//problem 07
function totalPrice(product = { price: 10, quantity: 1 }) {
  const total = product.price * product.quantity;
  return total;
}
const banana = { price: 10, quantity: 12 };
// const result = totalPrice(banana);

//problem 08
function getTwice(arr = [5, 10, 15]) {
  let newArr = [];
  for (const num of arr) {
    newArr.push(num * 2);
  }
  return newArr;
}

// const result = getTwice();

//problem 09
function countInterest(obj = { principle: 1000, rate: 5 }) {
  const interest = obj.principle * (obj.rate / 100);
  return interest;
}
const obj1 = { principle: 10000, rate: 15 };
// const result = countInterest();

//problem 10
function netSalary(obj = { salary: 50000, tax: 10 }) {
  const tax = obj.salary * (obj.tax / 100);
  const netSalary = obj.salary - tax;
  return netSalary;
}
const obj = { salary: 10000, tax: 15 };
const result = netSalary();
