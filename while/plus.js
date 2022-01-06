const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

while (input[0][0] !== "0") {
  const [a, b] = input.shift().split(" ");
  console.log(+a + +b);
}
