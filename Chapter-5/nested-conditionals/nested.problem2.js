const guest = true;
const tea = true;
const biscuit = false;

if (guest) {
  if (tea) {
    if (biscuit) {
      console.log("Tea with biscuit");
    } else {
      console.log("Tea is ready");
    }
  } else {
    console.log("Watch TV");
  }
}
