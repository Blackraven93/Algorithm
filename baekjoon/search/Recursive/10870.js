const n = Number(require("fs").readFileSync("./test/test.txt"));
// 피보나치 수 5

const first = 0;
const second = 1;

const fibonacci = (n) => {
  if (n <= 1) {
    if (n === 1) return second + first;
    if (n === 0) return first;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(n));
