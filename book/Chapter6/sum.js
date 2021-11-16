/*
자연수 n이 주어졌을 때 1부터 n까지의 합을 반환하는 함수 sum()을 구현
이를 재귀를 이용하여 호출하라
*/

// 재귀를 이용하려면 말이지
// 1+2+3+4+5+6+7+8+9+10
// 어떤 포인트가 어려웠던거지??

let number = 0;
const sum = (n) => {
  if (n > 1) return n + sum(n - 1);
  else return 1;
};

console.log(sum(10));

// 책 풀이

let ret = 0;
const f = (n) => {
  for (let i = 1; i <= n; i++) {
    ret += i;
  }
  return ret;
};

console.log(f(10));

// 종료 조건을 명시적으로 작성할 것
const f2 = (n) => {
  if (n === 1) return 1;
  return n + f2(n - 1);
};

console.log(f2(10));

// 재귀는 하나의 조각?
