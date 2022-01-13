const AsciiA = "a".charCodeAt(0);
const AsciiZ = "z".charCodeAt(0);

const rl = require("readline").createInterface({ input: process.stdin });

let result = [];
rl.on("line", (string) => {
  for (let i = AsciiA; i <= AsciiZ; i++) {
    result.push(string.indexOf(String.fromCharCode(i)));
  }
  console.log(result.join(" "));
  process.exit();
});
