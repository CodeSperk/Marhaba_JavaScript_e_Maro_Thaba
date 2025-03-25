//problem 1
const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};
const { brand } = product;

//problem 2
const item = {
  name: "Mobile",
  price: 20000,
  phone: "Samsung",
};
// const { phone, price } = item;

//problem 3
const colors = ["red", "blue", "green", "yellow"];
const [firstColor, secondColor] = colors;

//problem 4
const nums = [23, 21, 43];
const [, second] = nums;

//problem 5
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;

//problem 6
function multiply(a, b) {
  return [a * 3, b * 3];
}
const [firstVal, secondVal] = multiply(5, 6);

//problem 7
const person = { name: "Rahim", city: "Dhaka" };
// const { name, phone = "N/A" } = person;

//problem 8
const teacher = {
  name: "Maria",
  profession: "Teacher",
};
const { name, profession: job } = teacher;
