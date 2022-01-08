const rl = require("readline").createInterface({
  input: process.stdin,
});
const digit_array = Array.from({ length: 10 }, (_, index) => index);
let result = 1;

const getLength = (param) => (param ? param.length : 0);

rl.on("line", (input) => {
  result *= parseInt(input, 10);
}).on("close", () => {
  digit_array.forEach((number) => {
    console.log(getLength(result.toString().match(RegExp(number, "g"))));
  });
  process.exit();
});
