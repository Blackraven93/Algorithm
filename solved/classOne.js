// 한줄
let input = require("fs").readFileSync("./dev/stdin").toString()
// buffer 꼭 string으로 전환하기

// 여러줄
let [n, numbers] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")


// 1001
let A = Number(a);
let B = Number(b);
console.log(A - B);

// 1008
console.log(A / B);

// 1152
// 공백만 주어졌을 때 값이 있는 형태이다.
console.log(words);
console.log(words[0] === "" ? 0 : words.length);


// 1157
// 메모리 초과

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

// 다시 품
let wordsArr = [...new Set(words)];
words.split('').map(e => {
  let wordsCount = 0
  wordsSet.map(element => {
    e === element && wordsCount++
  })
})

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

// 문자열 '2' 같은 경우 체크 안됬음

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


// 1330번
// 문자열일 때 숫자는 대소비교 달라짐
a = Number(a);
b = Number(b);
a === b ? console.log("==") : a > b ? console.log(">") : console.log("<");

// 1546
let grades = numbers.map((e) => Number(e));
const maxNum = Math.max(...grades);
grades = grades.map((e) => parseFloat((e / maxNum) * 100));

const avg = parseFloat(grades.reduce((pre, curr) => pre + curr) / n);

console.log(n, avg);

// 2438 3분
// 2439 2분
for (let i = 1; i < n + 1; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

// 2475 8분 14초
let inputs = numbers.map((e) => Number(e) ** 2);
const checkNumber = inputs.reduce((pre, curr) => pre + curr) % 10;
console.log(checkNumber);

// 2562 4분 40
numbers = numbers.map((e) => Number(e.trim()));

const maxNum = Math.max(...numbers);
const maxNumOrder = numbers.indexOf(maxNum) + 1;

console.log(maxNum);
console.log(maxNumOrder);

// 2577 13분 52 결국 못 풀었음

let squareNum = numbers.reduce((pre, curr) => pre * curr);
let zeroCount = 0;
squareNum
  .toString()
  .split("")
  .map((e) => Number(e) === 0 && zeroCount++);

// // 여기서 잠깐 떠오르지가 않아..

let divideSquareNum = squareNum
  .toString()
  .split("")
  .map((e) => Number(e));

let numbersArr = [zeroCount, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 1; i < 10; i++) {
  let count = 0;
  for (const number of divideSquareNum) {
    number === i && count++;
  }
  numbersArr[i] = count;
}

numbersArr.map((e) => console.log(e));

// 2675 7분 30초

for (let i = 0; i < n; i++) {
  const countNum = Number(inputs[i][0]);
  const newString = inputs[i][1].split("").map((e) => e.repeat(countNum));
  console.log(newString.join(""));
}

// 2739 1분 40 2741 N찍기 2742 기찍 N

console.time("string");

let answer = "";

for (let i = n; i > 0; i--) {
  answer += i + "\n";
}

console.log(answer.trimEnd());
console.timeEnd("string");
// string: 11.010s

console.time("array");
for (let i = 1; i <= n; i++) {
  console.log(i);
}
console.timeEnd("array");
// array: 49.029s

// 2741 N찍기 2742

// 2753 윤년 1분

const check = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 1;
  } else {
    return 0;
  }
};

console.log(check(n));

// 2884 알람 시계 6분 30 + 10분 34초
// 아예 시간을 변환 해보려고 했다.
// 근데 이게 조금 더 간단할 것 같다.
hour = parseInt(hour);
time = parseInt(time);

if (45 > time) {
  if (hour !== 0) {
    hour -= 1;
    time = time + 60 - 45;
  } else {
    hour = 23;
    time = time + 60 - 45;
  }
} else {
  time = time - 45;
}

console.log(hour, time);

// 2908 상수 9분 34초
// 거꾸로지 정렬이 아니야! sort 사용 X

const convert = (number) => {
  number = number.split("")[(number[0], number[1], number[2])] = [
    number[2],
    number[1],
    number[0],
  ];

  return parseInt(number.join(""));
};

convert(a) > convert(b) ? console.log(convert(a)) : console.log(convert(b));

// 2920 음계 13분 50초

// 판별 프로그램

const cMajor = [c, d, e, f, g, a, b, C];

let temp = [...notes];

if (JSON.stringify(temp.sort((a, b) => a - b)) === JSON.stringify(notes)) {
  console.log("ascending");
} else if (
  JSON.stringify(temp.sort((a, b) => b - a)) === JSON.stringify(notes)
) {
  console.log("descending");
} else {
  console.log("mixed");
}

// 3052 나머지 22분 => input 문제

console.log(input);

let remainder = new Set();
for (let i of input) {
  remainder.add(i % 42);
}
console.log(remainder);
let remainderArr = [...remainder];

console.log(remainderArr.length);

// 8958 OX 퀴즈 9분 20초

let scoreArr = [];

for (let i = 0; i < n; i++) {
  let oXArray = input[i].split("");
  let score = 0;
  let tempScore = 0;

  for (let j of oXArray) {
    if (j === "O") {
      tempScore++;
      score += tempScore;
    } else {
      tempScore = 0;
    }
  }

  scoreArr.push(score);
}

scoreArr.map((e) => console.log(e));

// 9498 시험 성적 1분 30

const check = (n) => {
  if (n <= 100 && n >= 90) return "A";
  else if (n >= 80) return "B";
  else if (n >= 70) return "C";
  else if (n >= 60) return "D";
  else return "F";
};

console.log(check(n));

// 10172
console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);

// 10809 알파벳 찾기
const arr = "abcdefghijklmnopqrstuvwxyz".split("");
let numberArr = Array.from({ length: arr.length }, () => -1);

arr.map((alpha) => {
  n.split("").map((e, i) => {
    if (alpha === e) {
      numberArr[arr.indexOf(alpha)] === -1 &&
        (numberArr[arr.indexOf(alpha)] = i);
    }
  });
});

console.log(...numberArr);

// 10818 최소, 최대 7분

const count = parseInt(n);
const arr = input.split(' ').map(e => Number(e.trim()));
const minNum = Math.min(...arr)
const maxNum = Math.max(...arr)

console.log(`${minNum} ${maxNum}`)

let minNum = arr[0]
let maxNum = arr[0]

for (let i = 0; i < count; i++) {
  if (arr[i] > maxNum) maxNum = arr[i]
  else if (arr[i] < minNum) minNum = arr[i]
}

console.log(minNum, maxNum)

// 10869 사칙 연산
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

// 10872 x 보다 작은 수 5분 24초

let [n, x] = conditions.split(/\s+/).map(e => parseInt(e))
let numbers = arr.split(/\s+/).map(e => parseInt(e.trim()))
let answer = []
n이 arr 총 개수 x가 조건 수

for (const i of numbers) {
  i < x && answer.push(i)
}

console.log(...answer)

// 10950 A+B - 3 13분? 10951 A+B - 4
// toString 이후에 trim을 붙이면 왜 정답이지....????

const arr = input.map(e => e.split(' ').map(el => parseInt(el)))

for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i][0] + arr[i][1])
}

// 11720 숫자의 합
const answer = numbers.split('').map(e => Number(e))
console.log(answer.reduce((pre, cur) => pre + cur))