const rl = require("readline").createInterface({
  input: process.stdin,
});
let maxNumber = 0;
let currentLine = 1;
let currentIndex = 0;

rl.on("line", (input) => {
  const number = parseInt(input, 10);
  if (number > maxNumber) {
    maxNumber = number;
    currentIndex = currentLine;
  }
  currentLine++;
}).on("close", () => {
  console.log("%d\n%d", maxNumber, currentIndex);
  process.exit();
});
