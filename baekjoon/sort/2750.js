// 주소 /dev/stdin

const [n, ...arr] = require("fs")
  .readFileSync("./test/test.txt")
  .toString()
  .trim()
  .split(/\s+/);

const length = parseInt(n);

// Implement Bubble sort
const numbers = arr.map((element) => parseInt(element));

for (let i = 0; i < length; i++) {
  let pastArr = [...numbers];
  numbers.map((element, index) => {
    numbers[index + 1] < numbers[index] &&
      ([numbers[index], numbers[index + 1]] = [
        numbers[index + 1],
        numbers[index],
      ]);
  });
  if (numbers === pastArr) break;
  console.log(numbers);
}

numbers.map((e) => console.log(e));

// Implement Selection sort

// for (let count = 0; count < length - 1; count++) {
//   let minValue;
//   let pastArr = [...numbers];
//   for (let i = 0; i + count + 1 < length; i++) {
//     if (!minValue) {
//       numbers[i + count] > numbers[i + count + 1]
//         ? (minValue = numbers[i + count + 1])
//         : (minValue = numbers[i + count]);
//     } else {
//       numbers[i + count] > numbers[i + count + 1]
//         ? numbers[i + count + 1] < minValue &&
//           (minValue = numbers[i + count + 1])
//         : numbers[i + count] < minValue && (minValue = numbers[i + count]);
//     }
//   } // 배열을 한번 다 돌았을 대 최소 값
//   let minIndex = numbers.lastIndexOf(minValue);
//   numbers[minIndex] === numbers[count] ||
//     ([numbers[count], numbers[minIndex]] = [numbers[minIndex], numbers[count]]);
// 중복값 해결 어떻게 할지 생각해볼 것
//   console.log(count);
// }
