//problem 1
const miniMumNum = Math.min(45, 11, 89, 23, 56, 12, 56)

//problem 2
const maxNum = Math.max(21, 35, 67);

//problem 3
const rounded1 = Math.round(7.6);
const rounded2 = Math.round(7.2);

//problem 4
const floored1 = Math.floor(9.8);
const floored2 = Math.floor(5.3);

//problem 5
const ceiled1 = Math.ceil(3.1)
const ceiled2 = Math.ceil(6.9)

//problem 6
const absoluteValue = Math.abs(-34)

//problem 7
const convertNum = (num) => {
    const floored = Math.floor(num);
    const ceiled = Math.ceil(num);
    const rounded = Math.round(num);
    return {floored, ceiled, rounded}
}