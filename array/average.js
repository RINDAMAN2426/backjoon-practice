const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const scores = input[1].split(" ").map((v) => parseInt(v, 10));
const maxScore = Math.max(...scores);

const average =
  scores.reduce((acc, cur) => {
    return (acc += (cur / maxScore) * 100);
  }, 0) / N;

console.log(average);
