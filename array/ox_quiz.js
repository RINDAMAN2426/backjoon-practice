// no.8958
const rl = require("readline").createInterface({
  input: process.stdin,
});
let currentLine = 0;
let bonus = 0;
let scores = "";

rl.on("line", (string) => {
  currentLine++;
  if (currentLine === 1) {
    return;
  }
  const score = string.split("").reduce((acc, cur) => {
    if (cur === "O") {
      return acc + 1 + bonus++;
    } else {
      bonus = 0;
      return acc;
    }
  }, 0);
  scores += score + "\n";
  bonus = 0;
}).on("close", () => {
  console.log(scores);
  process.exit();
});
