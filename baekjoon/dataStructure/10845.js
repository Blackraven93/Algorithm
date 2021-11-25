// 큐
let [n, ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(/\n+/);

let countNum = parseInt(n)
arr = arr.map(e => e.trim())

let queueArr = []
let answer = ''


    
// 0~ 13 까지
for (let i = 0; i < countNum; i++) {
        // push
        arr[i].length >= 6 && (queueArr.push(parseInt(arr[i].split(' ')[1])))
        // pop
        arr[i] === 'pop' && (queueArr.length !== 0 ? answer += queueArr.shift() + '\n' : answer += '-1' + '\n') 

        // size
        arr[i] === 'size' && (answer += queueArr.length + '\n')
        
        // empty
        arr[i] === 'empty' && (queueArr.length === 0 ? answer += '1' + '\n' : answer += '0' + '\n');

        // front
        arr[i] === 'front' && (queueArr.length === 0 ? answer += '-1' + '\n' : answer += queueArr[0] + '\n')

        // back
        arr[i] === 'back' && (queueArr.length === 0 ? answer += '-1' + '\n' : answer += queueArr[queueArr.length - 1] + '\n')

}


console.log(answer.trim());





// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.