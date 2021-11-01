const n = require("fs").readFileSync("./test/test.txt").toString();

let [colIndex, rowIndex] = [n[0], n[1]];
const col = "abcdefgh".split("");
const row = "12345678".split("");

let x = col.indexOf(colIndex);
let y = row.indexOf(rowIndex);
let answer;

for (let c = 0; c < 8; c++) {
  for (let r = 0; r < 8; r++) {
    if ((c === 0 || c === 7) && (r === 0 || r === 7)) {
      answer = 2;
    } else if (
      ((c === 1 || c === 6) && (r === 0 || r === 7)) ||
      ((c === 0 || c === 7) && (r === 1 || r === 6))
    ) {
      answer = 3;
    } else if (
      (c >= 2 && c <= 5 && (r === 0 || r === 7)) ||
      ((c === 0 || c === 7) && r >= 2 && r <= 5) ||
      c === 1 ||
      c === 6 ||
      r === 1 ||
      r === 6
    ) {
      answer = 4;
    } else if (
      ((c === 1 || c === 6) && r >= 1 && r <= 6) ||
      (c >= 1 && c <= 6 && (r === 1 || r === 6))
    ) {
      answer = 6;
    } else {
      answer = 8;
    }

    if (x === r && y === c) {
      console.log(answer);
    }
  }
}

// 1시간 걸림 매우 바보 같이 품 ;; 개선해볼까?
