const [caseCount, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = [];

input.forEach((line) => {
  const [repeatCount, string] = line.split(" ");
  let repeatResult = "";
  string.split("").forEach((char) => {
    repeatResult += char.repeat(repeatCount);
  });
  result.push(repeatResult);
});

console.log(result.join("\n"));
