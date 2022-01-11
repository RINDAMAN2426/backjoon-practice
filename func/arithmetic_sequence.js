const rl = require("readline").createInterface({
  input: process.stdin,
});

function isSequence(n) {
  let diff;
  let prev;
  let result = true;
  const numbers = n
    .toString()
    .split("")
    .map((v) => parseInt(v, 10));

  for (let i = 0; i < numbers.length; i++) {
    if (prev === undefined) {
      prev = numbers[i];
      continue;
    }
    if (diff === undefined) diff = numbers[i] - prev;

    if (numbers[i] - prev !== diff) {
      result = false;
      break;
    }
    prev = numbers[i];
  }

  return result;
}

function main(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    isSequence(i) && count++;
  }
  console.log(count);
}

let inputNumber;
rl.on("line", (string) => {
  inputNumber = +string;
}).on("close", () => {
  main(inputNumber);
  process.exit();
});
