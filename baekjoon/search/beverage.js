const [n, m, ...numbers] = require("fs")
    .readFileSync("./test/test.txt")
    .toString()
    .trim()
    .split(/\s+/);


const row = Number(n);
const column = Number(m);

const arr = numbers.map((element) => element.split('').map(e => Number(e)));


// let visited = Array.from({ length: row }, element => Array.from({ length: column }, e => e = false))

// const answer = (arr, visited) => {
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < column; j++) {

//             i !== row
//         }
//     }
// }

// answer(arr, visited)

// 어떤 포인트를 모르는거지..?

const DFS = (x, y) => {
    if (x <= -1 || x >= row || y <= -1 || y >= column) {
        return false
    }
    if (arr[x][y] === 0) {
        arr[x][y] === 1;
        console.log(x, y)
        DFS(x - 1, y);
        DFS(x, y - 1);
        DFS(x + 1, y);
        DFS(x, y + 1);
        return true
    }
    return false
}

let result = 0
for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        if (DFS(i, j) === true) {
            result += 1
        }
    }
}

console.log(result)