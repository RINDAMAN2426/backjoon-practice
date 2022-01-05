const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentLine = 0;
let max_count = 0;
let sum = "";

function stringToNumber(string) {
  return string.split(" ").map((v) => parseInt(v, 10));
}

rl.on("line", (input) => {
  currentLine++;
  const numbers = stringToNumber(input);

  if (currentLine === 1) {
    max_count = numbers[0];
    return;
  }
  sum += numbers[0] + numbers[1] + "\n";

  if (max_count === currentLine - 1) {
    console.log(sum);
    process.exit;
  }
}).on("close", () => {
  console.log(sum);
  process.exit();
});
