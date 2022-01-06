const input = parseInt(
  require("fs").readFileSync("/dev/stdin").toString().trim().split(" "),
  10
);

let newSum;
let count = 0;

while (newSum !== input) {
  let target = newSum ?? input;
  const ones = target % 10;
  const tens = Math.floor(target / 10);

  const newOnes = (ones + tens) % 10;
  const newTens = ones;

  newSum = newTens * 10 + newOnes;
  count++;
}

console.log(count);
