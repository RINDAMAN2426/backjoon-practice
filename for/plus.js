// hacker rank에서 쓰는 표준입력 핸들링

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (data) {
  inputString += data;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function sum(arr) {
  return arr.reduce((acc, cur) => (acc += cur));
}

function main() {
  const LOOP_COUNT = parseInt(readLine().trim(), 10);

  for (let i = 0; i < LOOP_COUNT; i++) {
    const arr = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((v) => parseInt(v, 10));
    console.log(sum(arr));
  }
}
