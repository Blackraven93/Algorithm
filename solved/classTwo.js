// 한줄
// let [x, y, w, h] = require("fs")
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((e) => Number(e));

// 여러 줄
let numbers = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 1085 직사각형에서 탈출
// let row = 0;
// let col = 0;
// let answer = 0;
// w / 2 - x < 0 ? (row = w - x) : (row = x);
// h / 2 - y < 0 ? (col = h - y) : (col = y);
// row > col ? (answer = col) : (answer = row);

// console.log(answer);

// 1181 단어 정렬 못 풀었음 다시 해결

// let arr = [...new Set(words)]

// n = parseInt(n)

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {

//     if (arr[i].length > arr[j].length) {
//       [arr[i], arr[j]] = [arr[j], arr[i]]
//     } else if (arr[i].length === arr[j].length) {
//       for (let z = 0; z < arr[i].length; z++) {
//         if (arr[i][z].charCodeAt() < arr[j][z].charCodeAt()) {
//           continue
//         } else {
//           [arr[i], arr[j]] = [arr[j], arr[i]]
//           break
//         }

//       }
//     }
//   }
// }


// 1259 팰린드롬수
// numbers.pop()

// let arr = []
// let answerArr = []
// let temp = 0

// for (let number of numbers) {
//   temp = arr.length
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] !== number[number.length - i - 1]) {
//       console.log(number[i], number[number.length - i - 1])
//       arr.push('no')
//       break
//     }
//   }
//   console.log(arr)
//   temp !== arr.length ? answerArr.push('no') : answerArr.push('yes');

// }

// answerArr.map(e => console.log(e))

