const actualPrice = 4500;
if (actualPrice > 3000) {
  const discount = actualPrice * (5 / 100);
  const payable = actualPrice - discount;
  console.log(payable);
} else if (actualPrice > 6000) {
  const discount = actualPrice * (15 / 100);
  const payable = actualPrice - discount;
  console.log(payable);
}
