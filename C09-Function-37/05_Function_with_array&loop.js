//problem 1
function getOddSum(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
}
const nums = [5, 15, 8, 7];
// const result = getOddSum(nums);

//problem 2
function getOddSum(arr) {
  const result = arr[0] > arr[1] ? arr[1] : arr[0];
  return result;
}
const array = [25, 15, 8, 7];
// const result = getOddSum(array);

//problem 3
function getAge(age) {
  if (age < 18) {
    return 18;
  } else if (age > 45) {
    return 45;
  } else {
    return age;
  }
}
// const result = getAge(52);

//problem 4
function getSumOfDivisableBy4(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 4 === 0 && (sum += arr[i]);
  }
  return sum;
}
const arrayOfFriend = [4, 15, 8, 7];
// const result = getSumOfDivisableBy4(arrayOfFriend);

//problem 5
function getMultiplied(n) {
  const result = n > 20 ? n / 2 : n * 2;
  return result;
}
// const result = getMultiplied(18);

//problem 6
function getSumOfNegatives(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
    i++;
  }
  return sum;
}
const numbers = [5, -15, -8, 7];
// const result = getSumOfNegatives(numbers);

//problem 7
function getSumOfNegatives(arr) {
  let sum = 0;
  for (const num of arr) {
    num % 3 === 0 && (sum += num);
  }
  return sum;
}
const numsArray = [5, 15, -8, 9];
const result = getSumOfNegatives(numsArray);
