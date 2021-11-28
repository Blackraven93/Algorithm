// ReadLine 한줄

// 한줄
let [a, b, v] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((e) => parseInt(e));
// .toString()
// .trim()
// .split(" ")
// .map((e) => Number(e));

// 여러 줄
// let [...inputs] = require("fs")
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n").map(e => e.trim().split(' ').map(el => parseInt(el)))

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

// 11650 좌표 정렬하기

// let count = parseInt(n);
// let arr = inputs.map(e => e.trim().split(' '))

// 좌표가 X좌표가 증가하는 순으로, x좌표가 같으면 Y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성

// arr.forEach(e => {
//   arrX.push(e[0])
//   arrY.push(e[1])
// })

// arrX = arrX.map(e => parseInt(e))
// arrY = arrY.map(e => parseInt(e))

// for (let i = 0; i < count; i++) {
//   let minX = arrX[i]
//   let minY = arrY[i]
//   for (let j = i+1; j < count; j++) {
//     // 이전 value가 비교 value보다 같거나 크냐??
//     if (arrX[i] >= arrX[j]) {
//       // 같을 때
//       if (arrX[i] === arrX[j]) {
//         // Y 비교
//         if (arrY[i] > arrY[j]) {
//           [minX, minY] = [arrX[j], arrY[j]]
//         }
//       // 클 때
//       } else {
//         [minX, minY] = [arrX[j], arrY[j]]
//       }
//     }
//   }

//   // [arrX[i], arrY[i]] = [minX, minY]
//   console.log(arrX[i], minX);

//   arrX[arrX.indexOf(minX)] = arrX[i]
//   arrX[i] = minX

// }

// bubble sort 시간초과
// arr = arr.map(e => e.map(el => parseInt(el)))
// let noSwap
// // // 정렬 공부를 했을 때 (버블정렬)
// for (let i = arr.length-1; i > 0; i--) {
//   noSwap = true
//   for (let j = 0; j < i; j++) {
//     if (arr[j][0] > arr[j+1][0]) {
//       let temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1] = temp
//       noSwap = false
//     } else if (arr[j][0] === arr[j+1][0]) {}
//       if (arr[j][1] > arr[j+1][1]) {
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//         noSwap = false
//       }
//   }
//   if (noSwap) break
// }

// arr.forEach((e) => console.log(`${e[0]} ${e[1]}`))

// console.time('Selection');

// const selectionSort = (array) => {
//   // 배열을 앞에서 부터 돈다
// for (let i = 0; i < array.length; i++) {
//   let minIndex = i;
//   // i 보다 1큰 값으로 배열을 돈다
//   for (let j = i + 1; j < array.length; j++) {
//       // 시작하는 미니멈 인덱스 보다 작은 경우에
//     if (array[minIndex][0] > array[j][0]) {
//         // 최소 인덱스 값을 변수에 저장
//       minIndex = j;
//     } else if (array[minIndex][0] === array[j][0]) {
//       if (array[minIndex][1] > array[j][1]) minIndex = j;
//     }
//   }
//   // 포문을 한번 다 돌았는데 최소 값이 변했다면
//   if (minIndex !== i) {
//       // 변환
//     let swap = array[minIndex];
//     array[minIndex] = array[i];
//     array[i] = swap;
//   }
// }
// return array;
// }

// selectionSort(arr).forEach(e => console.log(`${e[0]} ${e[1]}`))

// console.timeEnd('Selection');

// inputs.pop()
// for (const arr of inputs) {
//   arr.sort((a, b) => a - b)
//   let [x,y,z] = arr
//   x**2 + y**2 === z**2 ? console.log('right') : console.log('wrong');
// }

// 11050 이항계수

// const factorial = (n) => {
//   // n이 === 1이 아니라 0이어야함.. 1시간 걸림 ㅠㅠ
//   if (n === 0) return 1
//   else return n * factorial(n-1)
// }

// const combination = (n, k) => {
//   return factorial(n) / (factorial(k) * (factorial(n-k)))
// }

// console.log(combination(n, k));

// 2231 분해합

// n의 분해합은 n과 n을 이루는 각 자리수의 합
//

// 245와 2 4 5의 합??

// 자연수 M = 245
// 분해합 N = 256

// 216을 줬다는 건가?
// 이거의 역은 어떻게 구현하지?
// N = M + M.toString().split('').reduce((cur, pre) =>cur + pre)

// const answerArr = [];

// const divideSum = (n) => {
//   // 1 <= N <= 1,000,000
//   for (let i = 1; i < n; i++) {
//     n === (i + parseInt(i.toString().split('').reduce((previous, current) => parseInt(previous) + parseInt(current)))) && answerArr.push(i)
//   }
//   // 생성자가 없는 경우에는 0을 출력한다.
//   if (answerArr.length === 0) return 0;
//   else return answerArr
// }
// divideSum(n) !== 0 ? console.log(Math.min(...divideSum(n))) : console.log(0);

// 2869 달팽이는 올라가고 싶다.

// let count = 0;

// const goUp = (a, b, v) => {
//   v -= a;
//   count += 1;
//   if (v <= 0) {
//     return count;
//   } else {
//     v += b;
//     return goUp(a, b, v);
//   }
// };

// console.log(goUp(a, b, v));

// 1. v에서 a를 뺀다
// 2. 만약에 v가 0이거나 0이하면 count에 +1을 하고 출ㄹ력
// 3. v가 0보다 크면 v에 b를 더해주고 count + 1 을 해준다.
// 4. 1~3번을 반복한다.

// 공식으로 풀어보기
console.log(Math.ceil((v - b) / (a - b)));
