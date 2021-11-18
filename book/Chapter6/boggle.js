https://algospot.com/judge/problem/read/BOGGLE#
const [...values] = require("fs")
  .readFileSync("./test/test.txt")
  .toString()
  .trim()
  .split(/\s+/);

const testCase = parseInt(values[0]);
const wordsCount = parseInt(values[6]);
const gameBoard = values.slice(1, 6).map((e) => e.split(""));
const words = values.slice(7, parseInt(values.length)).map((e) => e.split(""));

console.log(words);

const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0, -1, -1, -1, 0, 1];

const boogle = () => {
};

boogle();
