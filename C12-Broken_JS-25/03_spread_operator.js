//probelm 1
const productType = "Tech";
const technology = ["Condition", "Array", "loop"];
const newArray = [productType, ...technology];

//problem 2
const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "Papaya", "Orange"];

//problem 3
const frontend = ["JavaScript"];
const backend = ["NodeJs"];
const database = ["MongoDB"];
const techStack = [...frontend, ...backend, ...database];

//problem 4
const website = {
  name: "My site",
  type: "E-commerce",
  status: "active",
};
const websiteCopy = { ...website };
websiteCopy.theme = "dark";

//problem 5
const young = {
  name: "Arif",
  age: 30,
  country: "B Baria",
};
const copiedYoung = { ...young };
const { country, ...rest } = copiedYoung;
const result = rest;

//problem 6
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
const copiedCar = { ...car };
copiedCar.year = 2032;
