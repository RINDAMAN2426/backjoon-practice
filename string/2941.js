const GajsLatinAlphabets = [
  /c=/g,
  /c-/g,
  /dz=/g,
  /d-/g,
  /lj/g,
  /nj/g,
  /s=/g,
  /z=/g,
];

let input = require("fs").readFileSync("/dev/stdin").toString().trim();

GajsLatinAlphabets.forEach((GLAlphabet) => {
  input = input.replace(GLAlphabet, "G");
});
console.log(input.length);
