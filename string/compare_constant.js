const [input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = input.split(" ");

function reverseNumberString(numberString) {
  return numberString.split("").reverse().join("");
}
const [reversedA, reversedB] = numbers.map(reverseNumberString);
console.log(reversedA > reversedB ? reversedA : reversedB);
