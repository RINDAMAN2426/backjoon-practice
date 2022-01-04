function makeAlarm(hours, minutes) {
  const OND_DAY_PER_MIN = 1440;
  const total = hours * 60 + minutes;
  const alarm = total - 45 >= 0 ? total - 45 : OND_DAY_PER_MIN + total - 45;
  console.log("%d %d", Math.floor(alarm / 60), alarm % 60);
}

function main() {
  const [hours, minutes] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  makeAlarm(hours, minutes);
}

main();
