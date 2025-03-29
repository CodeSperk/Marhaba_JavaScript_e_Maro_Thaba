function updateProfile(prop) {
    prop.profession = "Software Dev"
    return prop;
};

const profile = {
    name: "Mahbub",
    age: 25,
}
const result = updateProfile(profile);
console.log(result, profile); //same output