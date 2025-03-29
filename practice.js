//problem 1
function rootFunc(callback){
  console.log(callback());
} 
function sayHello(){
return "hello"
}

rootFunc(sayHello)

//problem 2
function func2(obj, callback){
    callback(obj)
}

function getKeys(obj){
    console.log(Object.keys(obj));
}

func2({name: "mahub", age:22}, getKeys)

//problem 3
const numberProcessor = (num, callback) => {
    const dividedNum = num / 5;
    callback(dividedNum);
}
const showOutput = (result) => {
    console.log(result);
}
numberProcessor(26, showOutput)

//problem 4
function mainFunction(callback) {
    callback()
}
function callbackFunc(){
    console.log("Working");
}
mainFunction(callbackFunc)