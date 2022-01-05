const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stringToNumber = (data) =>
  data
    .trim()
    .split(" ")
    .map((v) => parseInt(v, 10));

let currentLine = 0;
let length = 0;
let target = 0;
let belowNumbers = "";

rl.on("line", (string) => {
  const numbers = stringToNumber(string);
  currentLine++;
  if (currentLine === 1) {
    length = numbers[0];
    target = numbers[1];
    return;
  }

  numbers.forEach((v) => {
    if (v < target) {
      belowNumbers += v + " ";
    }
  });

  console.log(belowNumbers);
  process.exit();
});
