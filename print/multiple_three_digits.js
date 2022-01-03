const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const first = Number(input[0]);
const multiples = input[1]
  .split("")
  .map((v) => Number(v))
  .reverse()
  .reduce((acc, cur, idx) => {
    console.log(first * cur);
    return acc + first * cur * Math.pow(10, idx);
  }, 0);

console.log(multiples);

// with readline

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const numbers = [];
rl.on("line", (input) => {
  numbers.push(input);
  if (numbers.length === 2) {
    rl.close();
    const first = Number(numbers[0]);
    const multiples = numbers[1]
      .split("")
      .map((v) => Number(v))
      .reverse()
      .reduce((acc, cur, idx) => {
        console.log(first * cur);
        return acc + first * cur * Math.pow(10, idx);
      }, 0);

    console.log(multiples);
  }
});
