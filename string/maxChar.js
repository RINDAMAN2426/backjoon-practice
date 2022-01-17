const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let accumulator = {};

const lowerInput = input.toUpperCase();
lowerInput.split("").forEach((char) => {
  if (accumulator[char] === undefined) {
    accumulator[char] = 1;
  } else {
    accumulator[char]++;
  }
});

const sortedKeys = Object.keys(accumulator).sort(
  (prev, curr) => accumulator[curr] - accumulator[prev]
);

const result =
  accumulator[sortedKeys[0]] === accumulator[sortedKeys[1]]
    ? "?"
    : sortedKeys[0];

console.log(result);
