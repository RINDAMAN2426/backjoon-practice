// no.4344
const rl = require("readline").createInterface({
  input: process.stdin,
});
let currentLine = 0;
let percentages = "";

rl.on("line", (string) => {
  currentLine++;
  if (currentLine === 1) {
    return;
  }
  const input = string.split(" ").map((v) => parseInt(v, 10));
  const students = input.shift();
  const average = input.reduce((acc, cur) => acc + cur) / students;
  const passStudents = input.filter((v) => v > average).length;
  percentages += ((passStudents / students) * 100).toFixed(3) + "%\n";
}).on("close", () => {
  console.log(percentages);
  process.exit();
});
