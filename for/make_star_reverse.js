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

const createReverseStar = (index, maxLength) =>
  Array.from({ length: maxLength }, (_, k) => {
    if (maxLength - index <= k + 1) {
      return "*";
    } else {
      return " ";
    }
  }).join("");

rl.on("line", (string) => {
  const number = stringToNumber(string);
  Array.from({ length: number }, (_, index) => {
    star += createReverseStar(index, number) + "\n";
  });

  console.log(star);
  process.exit();
});
