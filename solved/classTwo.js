// 한줄
let [x, y, w, h] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number(e));

// 1085 직사각형에서 탈출
let row = 0;
let col = 0;
let answer = 0;
w / 2 - x < 0 ? (row = w - x) : (row = x);
h / 2 - y < 0 ? (col = h - y) : (col = y);
row > col ? (answer = col) : (answer = row);

console.log(answer);

// 1259 필란드롬 수
