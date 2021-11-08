/*
 * 함수식을 이용한 재귀 표현
const f = (i) => {
    if (i === 100) {
        return
    }
    console.log(i, '번째 재귀함수에서', i + 1, '번째 재귀함수 호출')
    f(i + 1)
    console.log(i, '번째 재귀함수 종료')
}

f(4)

*/


let testNumber = 5;
let multiply = 1;

for (let i = 1; i <= testNumber; i++) {
    multiply *= i
}

// console.log(multiply)

// 차이가 무엇일까?? => 함수로 감쌌다의 차이

const factorialIter = (n) => {
    let result = 1
    for (let i = 1; i < n + 1; i++) {
        result *= i
    }
    return result
}

// 재귀적 호출
const factorialRecursion = (n) => {
    if (n <= 1) return 1
    return n * factorialRecursion(n - 1);
}

// console.log(factorialIter(5));
// console.log(factorialRecursion(5));

/**
 * 유클리드 호제법
 * 두자연수 A 와 B에 대하여 (A > B) A를 B로 나눈 나머지를 R이라 할 때
 * A와 B의 최대 공약수는, B와 R의 최대 공약수와 같다.
 * 결국 우리가 도출해야할 수는 `값`이다 return을 빼먹지 말 것
 */
/*
let r;
const GCD = (a, b) => {
    a > b ? (r = a % b) : (r = b % a)
    if (r === 0) return b
    return GCD(b, r)
}

console.log(GCD(192, 162));
*/
// 만약 A > B의 조건이 전제 된다면

/*
이렇게 조금 더 간추릴 수 있다.
const GCD2 = (a, b) => {
    if (a % b === 0) return b;
    return GCD2(b, a % b);
}

console.log(GCD2(192, 162));
*/
