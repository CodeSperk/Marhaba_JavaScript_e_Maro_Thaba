//Problem 1
function evenAverage(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  if (evenArr.length === 0) {
    return "No even numbers";
  }
  let sum = 0;
  for (const num of evenArr) {
    sum += num;
  }
  return sum / evenArr.length;
}

const array1 = [11, 21, 17];
const array2 = [12, 21, 10, 32, 23, 17];
// const result = evenAverage(array2);

//alternative
function getEvenAverage(arr) {
  let length = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      length += 1;
      sum += arr[i];
    }
  }
  return length > 0 ? sum / length : "No even number found";
}
// const result = getEvenAverage(array1);

//problem 2
function oddArrayMultipliedByTwo(arr) {
  let newArray = [];
  for (const num of arr) {
    if (num % 2 !== 0) {
      newArray.push(num * 2);
    }
  }
  return newArray;
}
const nums = [12, 11, 12, 11];
// const result = oddArrayMultipliedByTwo(nums);

//problem 3
function hasOddNum(arr) {
  let oddNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 !== 0 && (oddNumbers += 1);
  }
  return oddNumbers > 0 ? "Odd Numbers found" : "No odd Numbers";
}
const numbers = [12, 12, 12, 12];
// const result = hasOddNum(numbers);

//problem 4
function oddNumsAverage(arr) {
  let oddArray = [];
  for (const num of arr) {
    if (num % 2 !== 0) {
      oddArray.push(num);
    }
  }
  if (oddArray.length > 0) {
    let sum = 0;
    for (const n of oddArray) {
      sum = sum + n;
    }
    return (sum / oddArray.length).toFixed(2);
  } else {
    return "No odd numbers";
  }
}
const numsArray = [12, 22, 22, 32];
// const result = oddNumsAverage(numsArray);

//problem 5
function oddArr(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 !== 0 && oddArr.push(arr[i] - 1);
  }
  return oddArr.length > 0 ? oddArr : "No odd Numbers";
}
const numsArr = [12, 31, 11, 12];
const result = oddArr(numsArr);
