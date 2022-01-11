// no. 4673
let n = 1;
let nonSelfNumbers = [];

function d(n) {
  return (
    n +
    n
      .toString()
      .split("")
      .reduce((acc, cur) => +acc + +cur, 0)
  );
}

function isSelfNumber(n) {
  return nonSelfNumbers.indexOf(n) === -1;
}

while (n < 100) {
  nonSelfNumbers.push(d(n));
  isSelfNumber(n) && console.log(n);
  n++;
}
