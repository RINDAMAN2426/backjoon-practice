const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

console.log(
  "%d\n%d\n%d\n%d\n%d",
  a + b,
  a - b,
  a * b,
  Math.floor(a / b),
  a % b
);
