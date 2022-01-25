const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const alphabets = input.split("");

function generateDialMap() {
  let AsciiA = "A".charCodeAt();
  let AsciiR = "R".charCodeAt();
  let AsciiY = "Y".charCodeAt();
  let AsciiZ = "Z".charCodeAt();

  let setCounter = 0;
  let executionTime = 3;
  const dialMap = new Map();

  for (let i = AsciiA; i <= AsciiZ; i++) {
    if (setCounter === 3) {
      executionTime++;
      setCounter = 0;
    }

    dialMap.set(String.fromCharCode(i), executionTime);
    if (i === AsciiR || i === AsciiY) {
      continue;
    }
    setCounter++;
  }
  return dialMap;
}

function main() {
  const dialMap = generateDialMap();
  let totalExecTime = 0;
  alphabets.forEach((alphabet) => {
    totalExecTime += dialMap.get(alphabet) ?? 0;
  });
  console.log(totalExecTime);
}

main();
