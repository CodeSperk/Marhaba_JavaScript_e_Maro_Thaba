//remove duplicate
function rmvDuplicate(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
const nums = [1, 5, 61, 5, 87, 7, 5, 81, 61];
const result = rmvDuplicate(nums);
console.log(result);
