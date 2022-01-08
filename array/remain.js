const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const remains = [];

input.forEach((v) => {
  const remain = +v % 42;

  if (remains.indexOf(remain) === -1) {
    remains.push(remain);
  }
});

console.log(remains.length);
