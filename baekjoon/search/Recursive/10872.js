const n = Number(require("fs").readFileSync("./test/test.txt"));
// 팩토리얼

const sum = (n, answer = 0) => {
  if (n === 0) return answer;
  return sum(n - 1, answer + n);
};

console.log(sum(n));

const factorial = (n, answer = 1) => {
  if (n === 0) return answer;
  return factorial(n - 1, answer * n);
};

console.log(factorial(n));
