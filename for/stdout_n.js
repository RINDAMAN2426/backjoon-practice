let numbers = "";

process.stdin.on("data", (data) => {
  const n = parseInt(data.toString().trim(), 10);
  Array.from({ length: n }, (_, v) => (numbers += v + 1 + "\n"));
  console.log(numbers);
  process.exit();
});
