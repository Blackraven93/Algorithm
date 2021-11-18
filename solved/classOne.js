// 1001
const words = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .toUpperCase()
  .split("");

// let A = Number(a);
// let B = Number(b);

// console.log(A - B);

// 1008

// console.log(A / B);

// 1152
// 공백만 주어졌을 때 값이 있는 형태이다.
// console.log(words);
// console.log(words[0] === "" ? 0 : words.length);

//1157

// 메모리 초과
// let wordsSet = new Set(words.split(""));
// let wordsCountArr = [];

// for (item of wordsSet) {
//   let wordsNumber = 0;
//   words.split("").map((e) => {
//     e === item && wordsNumber++;
//   });
//   wordsCountArr.push(wordsNumber);
// }

// let maxNumber = Math.max(...wordsCountArr);

// if (wordsCountArr.indexOf(maxNumber) === wordsCountArr.lastIndexOf(maxNumber))
//   console.log([...wordsSet][wordsCountArr.indexOf(maxNumber)]);
// else console.log("?");

// 다시 품
let wordsArr = [...new Set(words)];
// words.split('').map(e => {
//     let wordsCount = 0
//     wordsSet.map(element => {
//         e === element && wordsCount++
//     })
// })
// 무슨 차이였을까? 왜 나는 이전에 코드를 작성했을까?
let arr = [];
wordsArr.map((element, index) => {
  let wordsCount = 0;
  words.map((e) => {
    e === element && wordsCount++;
  });
  arr[index] = wordsCount;
});
let maxNum = Math.max(...arr);

// while (
//   (wordsArr[arr.indexOf(maxNum)].charCodeAt() <= 96 ||
//     wordsArr[arr.indexOf(maxNum)].charCodeAt() >= 121) &&
//   wordsArr[arr.indexOf(maxNum)] !== ""
// ) {
//   arr.splice(arr.indexOf(maxNum), 1);
// }

if (arr.indexOf(maxNum) === arr.lastIndexOf(maxNum))
  console.log(wordsArr[arr.indexOf(maxNum)]);
else console.log("?");
