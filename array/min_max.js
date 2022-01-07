const [length, numbers] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const array = numbers.split(" ").sort((a, b) => a - b);
console.log(array[0], array[length - 1]);
