function getQuadrant(a, b) {
  if (a > 0 && b > 0) return 1;
  if (a < 0 && b > 0) return 2;
  if (a < 0 && b < 0) return 3;
  if (a > 0 && b < 0) return 4;
}

function main() {
  const input = [];
  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (line) => {
    input.push(Number(line.toString().trim()));
  }).on("close", () => {
    const [a, b] = input;
    console.log(getQuadrant(a, b));
    process.exit();
  });
}
main();
