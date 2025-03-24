//Problem 1
function calcutaleIncomeTag(income) {
  if (income <= 50000) {
    return 10;
  } else if (income <= 100000) {
    return 20;
  } else if (income <= 200000) {
    return 30;
  } else if (income > 200000) {
    return income * (40 / 100);
  }
}
// const result = calcutaleIncomeTax(200001);

//problem 2
function deliveryCharge(weight) {
  if (weight < 10) {
    return 100;
  } else if (weight <= 20) {
    return 300;
  } else if (weight <= 50) {
    return 1000;
  } else if (weight > 50) {
    return 1000 + (weight - 50) * 100;
  }
}

// const result = deliveryCharge(53);

//problem 3
function resultGrade(marks) {
  if (marks >= 0 && marks <= 100) {
    if (marks >= 80) {
      return "A";
    } else if (marks >= 70) {
      return "B";
    } else if (marks >= 60) {
      return "C";
    } else if (marks >= 50) {
      return "D";
    } else if (marks < 50) {
      return "F";
    } else {
    }
  } else {
    return "Invalid marks";
  }
}

const result = resultGrade(46);

console.log(result);
