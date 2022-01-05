const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let star = "";

const stringToNumber = (data) =>
  data
    .trim()
    .split(" ")
    .map((v) => parseInt(v, 10));

const createStar = (length) => Array.from({ length }).fill("*");

rl.on("line", (string) => {
  const number = stringToNumber(string);
  Array.from({ length: number }, (_, index) => {
    star += createStar(index + 1).join("") + "\n";
  });

  console.log(star);
  process.exit();
});
