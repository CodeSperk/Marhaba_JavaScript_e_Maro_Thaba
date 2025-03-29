//problem 1
const now = new Date();

//problem 2
const createDate = new Date(2035, 6, 15, 14, 45, 30, 999);

//problem 3
const getFullYear = new Date().getFullYear()

//problem 4

const date = new Date();
date.setFullYear(2025)
console.log(date);

//problem 5
function getDayName(num) {
    switch(num){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
    
}
const getDay = new Date().getDay()
console.log(getDayName(getDay));