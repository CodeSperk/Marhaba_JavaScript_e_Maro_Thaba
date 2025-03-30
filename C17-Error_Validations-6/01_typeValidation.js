//problem 1
const getFirstLetter = (str) => {
    if(typeof str !== "string"){
        return "Please provide a valid name";
    }
    return result =str[0];
}
// console.log(getFirstLetter([12,12]));

//problem 2
const getLastValue = (arr) => {
    if(!Array.isArray(arr)){
        return "Invalid Array!, Please an array";
    }
    return arr[arr.length -1]
}

// console.log(getLastValue([1, 2, 3, 4]));

//problem 3
const getArea = (length, width) => {
    if(typeof length !== "number" ){
        return "Provide valid length";
    }else if( typeof width !== "number"){
        return "Provide valid width";
    }
    const result = length * width;
    return result;    
}

// console.log(getArea(12, 4));