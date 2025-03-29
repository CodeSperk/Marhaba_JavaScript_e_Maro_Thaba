//problem 1
true === 1? console.log("same") : console.log("different");;

//problem 2
console.log({} === {});

//problem 3
const array = [1 ,2 ,3];
const arr1 = array;
console.log(array === arr1);

//problem 4
const isEqual = (n, bool) => {
    return n == bool;
}

console.log(isEqual(1, true));

//problem 5
console.log("" == false); // true

//problem 6
console.log(null === undefined);

//problem 7
console.log(1 == "1");
//Explanation 
/**
 * When compared with double equals it will convert the second property string into number as the 1 is a number. then it will compare and the output will be true.
 */