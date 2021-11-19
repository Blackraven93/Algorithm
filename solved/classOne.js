// 1001
let n = Number(require("fs").readFileSync("./dev/stdin"));

// .toString()
// .split(/\n+/)
// .map((e) => e.trim().split(" "));

// let A = Number(a);
// let B = Number(b);

// console.log(A - B);

// 1008

// console.log(A / B);

// 1152
// 공백만 주어졌을 때 값이 있는 형태이다.
// console.log(words);
// console.log(words[0] === "" ? 0 : words.length);

/*
  1157
  메모리 초과

  let wordsSet = new Set(words.split(""));
  let wordsCountArr = [];

  for (item of wordsSet) {
    let wordsNumber = 0;
    words.split("").map((e) => {
      e === item && wordsNumber++;
    });
    wordsCountArr.push(wordsNumber);
  }

  let maxNumber = Math.max(...wordsCountArr);

  if (wordsCountArr.indexOf(maxNumber) === wordsCountArr.lastIndexOf(maxNumber))
    console.log([...wordsSet][wordsCountArr.indexOf(maxNumber)]);
  else console.log("?");

  다시 품
  let wordsArr = [...new Set(words)];
  words.split('').map(e => {
      let wordsCount = 0
      wordsSet.map(element => {
          e === element && wordsCount++
      })
  })
  무슨 차이였을까? 왜 나는 이전에 코드를 작성했을까?
  let arr = [];
  wordsArr.map((element, index) => {
    let wordsCount = 0;
    words.map((e) => {
      e === element && wordsCount++;
    });
    arr[index] = wordsCount;
  });
  let maxNum = Math.max(...arr);

  문자열 '2' 같은 경우 체크 안됬음
  while (
    (wordsArr[arr.indexOf(maxNum)].charCodeAt() <= 96 ||
      wordsArr[arr.indexOf(maxNum)].charCodeAt() >= 121) &&
    wordsArr[arr.indexOf(maxNum)] !== ""
  ) {
    arr.splice(arr.indexOf(maxNum), 1);
  }

  if (arr.indexOf(maxNum) === arr.lastIndexOf(maxNum))
    console.log(wordsArr[arr.indexOf(maxNum)]);
  else console.log("?");
*/

// 1330번
// 문자열일 때 숫자는 대소비교 달라짐
// a = Number(a);
// b = Number(b);
// a === b ? console.log("==") : a > b ? console.log(">") : console.log("<");

// 1546

// let grades = numbers.map((e) => Number(e));
// const maxNum = Math.max(...grades);
// grades = grades.map((e) => parseFloat((e / maxNum) * 100));

// const avg = parseFloat(grades.reduce((pre, curr) => pre + curr) / n);

// console.log(n, avg);

// 2438 3분
// 2439 2분

// for (let i = 1; i < n + 1; i++) {
//   console.log(" ".repeat(n - i) + "*".repeat(i));
// }

// 2475 8분 14초
// let inputs = numbers.map((e) => Number(e) ** 2);
// const checkNumber = inputs.reduce((pre, curr) => pre + curr) % 10;
// console.log(checkNumber);

// 2562 4분 40
// numbers = numbers.map((e) => Number(e.trim()));

// const maxNum = Math.max(...numbers);
// const maxNumOrder = numbers.indexOf(maxNum) + 1;

// console.log(maxNum);
// console.log(maxNumOrder);

// 2577 13분 52 결국 못 풀었음

// let squareNum = numbers.reduce((pre, curr) => pre * curr);
// let zeroCount = 0;
// squareNum
//   .toString()
//   .split("")
//   .map((e) => Number(e) === 0 && zeroCount++);

// // 여기서 잠깐 떠오르지가 않아..

// let divideSquareNum = squareNum
//   .toString()
//   .split("")
//   .map((e) => Number(e));

// let numbersArr = [zeroCount, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// for (let i = 1; i < 10; i++) {
//   let count = 0;
//   for (const number of divideSquareNum) {
//     number === i && count++;
//   }
//   numbersArr[i] = count;
// }

// numbersArr.map((e) => console.log(e));

// 2675 7분 30초

// for (let i = 0; i < n; i++) {
//   const countNum = Number(inputs[i][0]);
//   const newString = inputs[i][1].split("").map((e) => e.repeat(countNum));
//   console.log(newString.join(""));
// }

// 2739 1분 40 2741 N찍기 2742 기찍 N

// console.time("string");

let answer = "";

for (let i = n; i > 0; i--) {
  answer += i + "\n";
}

console.log(answer.trimEnd());
// console.timeEnd("string");
// string: 11.010s

// console.time("array");
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }
// console.timeEnd("array");
// array: 49.029s
// 2741 N찍기 2742
