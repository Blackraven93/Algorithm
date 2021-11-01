// 주소 /dev/stdin

const [n, ...arr] = require("fs")
  .readFileSync("./test/test.txt")
  .toString()
  .trim()
  .split(/\s+/);

// n은 n x n 행렬을 나타내기 위한 범위 숫자
// arr은 방향 배열 ex [R, R, R, U, D, D]

const scare = parseInt(n);

let [x, y] = [1, 1];

// 직관적인 코드
// for (let i = 0; i < arr.length; i++) {
//   if (y === 1 && arr[i] === "L") {
//     continue;
//   } else if (y === scare && arr[i] === "R") {
//     continue;
//   } else if (x === 1 && arr[i] === "U") {
//     continue;
//   } else if (x === scare && arr[i] === "D") {
//     continue;
//   }

//   switch (arr[i]) {
//     case "L":
//       y -= 1;
//     case "R":
//       y += 1;
//     case "U":
//       x -= 1;
//     case "D":
//       x += 1;
//   }
//   console.log(x, y);
// }

// 조금 유지 보수를 쉽게 하려면(자동화)

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const moveTypes = ["L", "R", "U", "D"];

for (let i = 0; i < arr.length; i++) {
  for (let direction = 0; direction < moveTypes.length; direction++) {
    if (arr[i] === moveTypes[direction]) {
      let nx = x + dx[direction];
      let ny = y + dy[direction];
      if (nx < 1 || ny < 1 || nx > n || ny > n) {
        continue;
      }

      [x, y] = [nx, ny];
    }
  }
  console.log(x, y);
}
