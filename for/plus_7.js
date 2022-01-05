const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentLine = 0;
let maxCount = 0;
const PREFIX = "Case #";
const COLON = ": ";
let sum = "";

const stringToNumber = (data) =>
  data
    .trim()
    .split(" ")
    .map((v) => parseInt(v, 10));

rl.on("line", (string) => {
  currentLine++;
  const numbers = stringToNumber(string);
  if (currentLine === 1) {
    maxCount = numbers[0];
    return;
  }
  const CASE_INDEX = currentLine - 1;
  sum += PREFIX + CASE_INDEX + COLON + (numbers[0] + numbers[1]) + "\n";

  if (maxCount === CASE_INDEX) {
    console.log(sum);
    process.exit();
  }
});
