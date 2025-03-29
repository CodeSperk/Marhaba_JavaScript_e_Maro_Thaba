//problem 1
const taxRate = 15;
function countTax(income){
  const countTax = income * (taxRate/100)
  console.log(countTax);
} 
countTax(120000)

//problem 2
function accessInside() {
    let insideSecret = "Internal secret hiding place";
}
// console.log(insideSecret); //reference error : insideSecret is not defined


//problem 3
if(true){
    let temparature = 30;
}
// console.log(temparature); //ReferenceError: temparature is not defined

//problem 4
const schoolDetails = () => {
    const schoolName = "HAZP School";
    function displaySchoolName() {
        console.log(schoolName);
    }
    displaySchoolName()
}
schoolDetails()