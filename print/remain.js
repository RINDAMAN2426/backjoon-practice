const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(
  "%d\n%d\n%d\n%d",
  (a + b) % c,
  ((a % c) + (b % c)) % c,
  (a * b) % c,
  ((a % c) * (b % c)) % c
);
