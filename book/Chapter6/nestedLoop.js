// 중첩 반복문 대체
/*
0번부터 차례대로 번호 매겨진 n개의 원소 중 네 개를 고르는 모든 경우를 출력
*/

let count = 0;
const nestedLoop = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let t = 0; t < n; t++) {
          count++;
        }
      }
    }
  }
  return count;
};

// console.log(nestedLoop(10));

// n개의 원소로 이루어진 정렬된 배열 Arr에 대하여
// m개를 뽑는 모든 조합을 배열로 출력하기

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const combination = (arr, m) => {
//   while (m > -1) {
//     for (let i = 0; i < arr.length; i++) {
//       if (i <= m) continue;
//       else console.log(arr[m], arr[i]);
//     }
//     m--;
//   }
//   return "끝";
// };

// console.log(combination(arr, 5));

function getAllCombinations(arr, m) {
  const combinations = [];
  const picked = [];
  const used = [];
  for (item of arr) used.push(0);

  function find(picked) {
    if (picked.length === m) {
      const rst = [];
      for (let i of picked) {
        rst.push(arr[i]);
      }
      combinations.push(rst);
      return;
    } else {
      let start = picked.length ? picked[picked.length - 1] + 1 : 0;
      for (let i = start; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1] || used[i - 1]) {
          picked.push(i);
          used[i] = 1;
          find(picked);
          picked.pop();
          used[i] = 0;
        }
      }
    }
  }
  find(picked);
  return combinations;
}

console.log(getAllCombinations(arr, 2));

const arr2 = [];

console.log(arr2[-1] + 1);
