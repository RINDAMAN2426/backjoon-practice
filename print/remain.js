const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [a, b, c] = input;

console.log(
  "%d\n%d\n%d\n%d",
  (a + b) % c,
  ((a % c) + (b % c)) % c,
  (a * b) % c,
  ((a % c) * (b % c)) % c
);
