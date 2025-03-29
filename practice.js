const sentence = "I am learning Web Dev.";

//method 1
const reversedSentence = sentence.split("").reverse().join("");

//method 2 : manually
let reverse = "";
for(const letter of sentence){
    reverse =letter + reverse;
}

console.log(reverse);