//Compare two date and get result in day

const date1 = new Date("2018-11-01");
const date2 = new Date("2019-10-01");

const differenceInmilliSecond = date2 - date1;
const differenceInDay = differenceInmilliSecond/(1000 * 60 * 60 * 24)
console.log(differenceInDay);