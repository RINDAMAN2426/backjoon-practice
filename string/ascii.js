const rl = require("readline").createInterface({
  input: process.stdin,
});

rl.on("line", (string) => {
  const ascii = string.charCodeAt(0);
  console.log(ascii);
  process.exit();
});
