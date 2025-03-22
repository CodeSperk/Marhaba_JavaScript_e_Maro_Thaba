const age = 64;
const amount = 250;
if (age < 12) {
  const discount = amount * (100 / 100);
  const payable = amount - discount;
  console.log(payable);
} else if (age > 60) {
  const discount = amount * (50 / 100);
  const payable = amount - discount;
  console.log(payable);
} else {
  const payable = amount;
  console.log(payable);
}
