const [N, ...words] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function isGroupWord(word) {
  const record = {};
  const splitedWord = word.split("");

  for (let i = 0; i < splitedWord.length; i++) {
    if (!record[splitedWord[i]]) {
      record[splitedWord[i]] = true;
    } else {
      if (splitedWord[i] !== splitedWord[i - 1]) {
        return false;
      }
    }
  }

  return true;
}

function main() {
  let groupWordsCount = 0;
  for (let i = 0; i < N; i++) {
    isGroupWord(words[i]) && groupWordsCount++;
  }

  console.log(groupWordsCount);
}

main();
