const n = require("fs").readFileSync("./test/test.txt").toString();

let arr = n.split("");
let numArr = [];
let charArr = [];

arr.map((element, index) => {
  // 숫자 체크
  // 0 ~ 9 charCodeAt => 48 ~ 57
  if (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
    numArr.push(arr[index]);
  } else {
    charArr.push(element);
  }
});

let number = [];

if (numArr !== [] && numArr.length > 1) {
  number = numArr.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue)
  );
}
let char = charArr.sort().join("");

const answer = char + number.toString();

console.log(n);
console.log(answer);

// 흠... sort 함수가 없다면??
