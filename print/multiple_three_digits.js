const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const first = Number(input[0]);
const multiples = input[1]
  .split("")
  .map(Number)
  .reverse()
  .reduce((acc, cur, idx) => {
    console.log(first * cur);
    return acc + first * cur * Math.pow(10, idx);
  }, 0);

console.log(multiples);
