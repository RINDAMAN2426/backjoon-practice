const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentLine = 0;
let maxCount = 0;
let sum = "";

const stringToNumber = (data) =>
  data
    .trim()
    .split(" ")
    .map((v) => parseInt(v, 10));

const createSumString = (index, a, b) =>
  `Case #${index}: ${a} + ${b} = ${a + b}\n`;

rl.on("line", (string) => {
  currentLine++;
  const numbers = stringToNumber(string);
  if (currentLine === 1) {
    maxCount = numbers[0];
    return;
  }
  const caseIndex = currentLine - 1;
  sum += createSumString(caseIndex, ...numbers);

  if (maxCount === caseIndex) {
    console.log(sum);
    process.exit();
  }
});
