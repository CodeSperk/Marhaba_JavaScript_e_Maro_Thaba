//problem 1
function isOddOrEven(arr) {
  const size = arr.length;
  const result = size % 2 === 0 ? "Even" : "Odd";
  return result;
}
// const result = isOddOrEven([12, 10, 23, 12, 1]);

//problem 2
function getFirstLetter(str) {
  return str[0];
}
// const result = getFirstLetter("sahbub");

//problem 3
function getConditionalResult(num) {
  const result = num > 10 ? num / 10 : num * 10;
  return result;
}
// const result = getConditionalResult(2);

//problem 4
function getSum(arr) {
  const result = arr[0] + arr[1];
  return result;
}
// const result = getSum([12, 10, 23, 12, 1]);

//problem 5
function getMultiplied(n) {
  const result = n > 0 ? n * 2 : n * 3;
  return result;
}
// const result = getMultiplied(-23);

//problem 6
function isGreater(str1, str2) {
  const result = str1.length > str2.length ? true : false;
  return result;
}
// const result = isGreater("Mahbubur", "Sumayaa");

//problem 7
function getMultipliedValue(num1, num2) {
  const mult = num1 * num2;
  const result = mult > 100 ? mult / 2 : mult;
  return result;
}
// const result = getMultipliedValue(12, 8);
