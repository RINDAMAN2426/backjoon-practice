function multiplicationTable(n) {
  Array.from({ length: 9 }, (_, k) =>
    console.log("%d * %d = %d", n, k + 1, n * (k + 1))
  );
}

function main() {
  const [n] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  multiplicationTable(n);
}
main();
