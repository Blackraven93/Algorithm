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

console.log(nestedLoop(10));

let count2 = 0;
let exe = 0;
const nestedLoop2 = (n) => {
  exe++;
  for (let i = 0; i < n; i++) {
    count2++;
  }
  if (exe === 5) return count2;
  else return nestedLoop2(n);
};

console.log(nestedLoop2(10));

const pick = (n, picked, toPick) => {
  if (toPick === 0) return picked;
  let smallest = picked;
  if (picked.isArray() === true && picked === []) {
    smallest = 0;
  } else {
    smallest = picked.pop() + 1;
  }
  for (let i = smallest; i < n; i++) {
    picked.push(i);
    pick(n, picked, toPick - 1);
    picked.pop();
  }
};
