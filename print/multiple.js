const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(input.reduce((acc, cur) => acc * cur, 1));
