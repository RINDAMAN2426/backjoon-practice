const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [year] = input;

function checkLeapYear(year) {
  if (year % 4 !== 0) return 0;
  if (year % 100 !== 0 || year % 400 === 0) return 1;
  return 0;
}

console.log(checkLeapYear(year));
