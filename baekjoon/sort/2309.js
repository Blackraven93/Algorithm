const [...numbers] = require("fs")
  .readFileSync("./test/test.txt")
  .toString()
  .trim()
  .split(/\s+/);

// Implement Bubble sort
let arr = numbers.map((element) => parseInt(element));

for (let count = 0; count < arr.length; count++) {
  let pastArr = [...arr];
  arr.map((element, index) => {
    arr[index + 1] < arr[index] &&
      ([arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]);
  });
  if (arr === pastArr) break;
}

for (let count = 0; count < arr.length; count++) {
  for (let i = 0; i < arr.length; i++) {
    let temp = [...arr];
    temp.splice(arr.indexOf(arr[count]), 1);
    temp.splice(arr.indexOf(arr[i + count]), 1); // 하나가 지워지는 순간 인덱스가 변형된다.
    let sum = temp.reduce((stack, e) => {
      return stack + e;
    });
    sum === 100 && (arr = temp);
  }
  let check = arr.reduce((stack, e) => {
    return stack + e;
  });
  if (check === 100) break;
}

arr.map((e) => console.log(e));
