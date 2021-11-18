// 하노이 탑 이동 순서
const n = Number(require("fs").readFileSync("./dev/stdin"));

// 해답
const solution = (n) => {
  const answer = [];

  const hanoi = (n, from, to) => {
    const by = 6 - from - to;

    if (n === 1) {
      answer.push([from, to]);
    } else {
      hanoi(n - 1, from, by);
      answer.push([from, to]);
      hanoi(n - 1, by, to);
    }
  };
  hanoi(n, 1, 3);

  return answer;
};

solution(3).map((e) => console.log(e));

// 구현 능력이 너무 약한데..?
// by에 대한 개념에 왜 익숙하지 않은가?
// 변하는 수는 모두 변수
