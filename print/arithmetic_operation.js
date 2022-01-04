const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [a, b] = input;

console.log(
  "%d\n%d\n%d\n%d\n%d",
  a + b,
  a - b,
  a * b,
  Math.floor(a / b),
  a % b
);
