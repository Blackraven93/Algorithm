// 별 찍기 - 10
const n = Number(require("fs").readFileSync("./dev/stdin"));

// 변하는 수가 뭐지?
//

let indices = 0; // 지수
let divide = 0; // 나누는 임시 값
const printStar = (n) => {
  // 지수 알아내기
  divide = n;
  while (divide !== 1) {
    divide = parseInt(divide / 3);
    indices++;
  }
  // * 하나가 이전 값이다
  const square = (n) => {
    console.log("***".repeat(n));
    console.log("* *".repeat(n));
    console.log("***".repeat(n));
  };
  for (let i = 0; i < n; i++) {
    square(n);
  }
};

// 조금 쉬운 문제로 변형해보자 네모가 증가하는 형태라고 생각해보자
const printSquare = (n) => {
  const square = (n) => {
    console.log("**".repeat(n));
    console.log("**".repeat(n));
  };
  for (let i = 0; i < n; i++) {
    square(n);
  }
};

// 결국 못풀었음 ㅎㅎ;;

const num = Number(require("fs").readFileSync("./dev/stdin"));
const lines = [];

const printStars = (num) => {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    // 오.. 이렇게 할 수도 있구나..
    lines.push("\n");
  }
};

const star = (i, j, num) => {
  if (i % 3 == 1 && j % 3 == 1) {
    // (1,1), (1,4), (1,7)...
    // 구멍 뚫기
    // 이걸 몰랐음 ;;
    lines.push(" ");
  } else {
    if (num == 1) {
      lines.push("*");
    } else {
      // (3,3) = (1,1)이 되고,
      // (3,4) = (1,1)이 된다.
      // (9,9), (27,27)도 동일한 방식으로 재귀 호출된다.
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
};

printStars(num);
console.log(lines.join(""));
// https://chunghyup.tistory.com/m/68
