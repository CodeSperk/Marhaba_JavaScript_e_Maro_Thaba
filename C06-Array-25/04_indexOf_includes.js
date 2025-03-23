// problem 1
const fruits = ["Apple", "Banana", "Mango", "Lichu"];
if (fruits.includes("Mango")) {
  console.log("Has Mango");
} else {
  console.log("No Mango. Go get now");
}

// problem 2
const names = ["Babul", "Arif", "Choton"];
const indexOfBabul = names.indexOf("Babul");

// problem 3
const friends = ["Rimon", "Rifat", "Rajib"];
const indexOfRifat = friends.indexOf("Rifat");

// problem 4
const capitals = ["Dhaka", "Chitagong", "Sylhet"];
capitals.push("rajshahi");
console.log(capitals.includes("Rajshahi"));

// problem 5
const weather = ["rain", "sunny", "cloudy", "windy"];
weather.includes("rain")
  ? console.log("I need upbrella")
  : console.log("No rain no pain");

//problem 6
const sports = ["cricket", "voliball", "football"];
console.log(sports.includes("badminton"));
