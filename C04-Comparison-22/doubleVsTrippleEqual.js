// problem 1
const comparison1 = 50 == "50";
const comparison2 = 50 === "50";
// console.log(comparison1, comparison2);

// problem 2
const check1 = "JavaScript" == "JavaScript"; //checked but quote auto corrected
const check2 = "JavaScript" === "JavaScript"; //checked but quote auto corrected
//both are true because both type and values are equal

// problem 3
const result1 = 25 == "25";
const result2 = 25 === "25";
/*
  first one is true because it compared only values
  on the otherhand 2nd one is false cz it checked 
  both values and types.
*/

// problem 4
const compare1 = "apple" == "apple";
const compare2 = "apple" === "apple";
/* both are true because both values and types are same.
  Though the first one checked only value
*/

// problem 5
const first = "test" == "TEST"; //values are not same, Case sentive
const second = "test" === "TEST"; // neither value nor types are same

// problem 6
const variableX = 15;
const variableY = "20";

const compare01 = variableX != variableY; //true
const compare02 = variableX !== variableY; //true

// problem 7
const variableA = hello; // have to be string, quotation marks required
const variableB = "Hello";
const compareA = variableA == variableB;
const compareB = variableA === variableB;
