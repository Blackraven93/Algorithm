// 19분 30초

let [n, ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(/\n+/);

let count = parseInt(n)
arr = arr.map(e => e.trim())

let stack = []
let answer = ''

// 시간초과가 난다면 console.log를 개선해라

for (let i = 0; i < count; i++) {

    // push
    arr[i].length >= 6 && stack.push(parseInt(arr[i].split(' ')[1]))

    // pop
    arr[i] === 'pop' && (stack.length !== 0 ? answer += stack.pop() + `\n` :answer += "-1"+'\n') 

    // size
    arr[i] === 'size' && (answer += stack.length.toString() + '\n')

    //empty
    arr[i] === 'empty' && (stack.length === 0 ? answer += '1' + '\n' : answer += '0' + '\n' )

    // top
    arr[i] === 'top' && (stack.length === 0 ? answer += '-1' + '\n' : answer += stack[stack.length - 1] + '\n')
}

console.log(answer.trim());


/*
[X] push X: 정수 X를 스택에 넣는 연산이다.
[X] pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
[X] size: 스택에 들어있는 정수의 개수를 출력한다.
[X] empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
[X] top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/