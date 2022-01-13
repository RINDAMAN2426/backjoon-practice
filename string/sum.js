const rl = require("readline").createInterface({
  input: process.stdin,
});

let currentLine = -1;

rl.on("line", (string) => {
  currentLine++;
  if (currentLine === 0) {
    return;
  }
  const sum = string.split("").reduce((acc, cur) => +acc + +cur, 0);
  console.log(sum);
  process.exit();
});
