//problem 1
function mileToGauze(mile) {
  const gauze = mile * 1760;
  return gauze;
}
// const result = mileToGauze(13);

//problem 2
function kWByHToKC(kWByH) {
  const kiloCallory = kWByH * 860;
  return kiloCallory;
}
const kilowattByHour = 1;
// const result = kWByHToKC(kilowattByHour);

//problem 3
function hourToSeconds(hour) {
  const minutes = hour * 60;
  const seconds = minutes * 60;
  return seconds;
}
// const result = hourToSeconds(2);

//problem 4
function cmToMeter(cm) {
  const meter = cm / 100;
  return meter;
}
// const result = cmToMeter(512);

//problem 5
function inchToCm(inch) {
  const cm = inch * 2.54;
  return cm;
}
// const result = inchToCm(512);

//problem 6
function poundToKG(pound) {
  const kg = pound * 0.453;
  return kg;
}
// const result = poundToKG(512);

//problem 7
function gauzeToMeter(gauze) {
  const meter = gauze * 0.91;
  return meter;
}
const result = gauzeToMeter(512);

console.log(result);
