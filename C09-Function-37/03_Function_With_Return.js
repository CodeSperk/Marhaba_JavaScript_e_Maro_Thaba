//problem 1
function isMoreThanTen(num) {
  return num > 10 ? true : false;
}
// isMoreThanTen(12);

//problem 2
function isDivisableBy13(num) {
  return num % 13 === 0 ? true : false;
}
// isDivisableBy13(26);

//problem 3
function totalPrice(price1, price2, price3) {
  return price1 + price2 + price3;
}
const rice = 14;
const curry = 30;
const drink = 20;
// const result = totalPrice(rice, curry, drink);

//problem 4
function isEligible(age) {
  return age >= 18 ? "Eligible for Voting" : "Not Eligible";
}
// const result = isEligible(20);

//problem 5
function getLength(word) {
  return word.length;
}
// const result = getLength("asdfg;lkj hasdf");

//problem 6
function getAverage(num1, num2, num3) {
  const average = (num1 + num2 + num3) / 3;
  return average;
}
// const result = getAverage(12, 32, 22);

//problem 7
function isNegative(num) {
  return num < 0 && num * -1;
}
// const result = isNegative(-34);

console.log(result);
