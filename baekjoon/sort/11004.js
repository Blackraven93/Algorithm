// k번째 수
let [numbers , inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")


let [n, k] = numbers.split(' ').map(e => parseInt(e))
let array = inputs.split(' ').map(e => parseInt(e));

const selectionSort = (n, k, array) => {
    for (let i = 0; i < n; i++) {
        let minIndex = i
        for (let j = i+1; j < n; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            let temp = array[i]
            array[i] = array[minIndex]
            array[minIndex] = temp
        }
    }

    return array[k-1]
}



console.log(selectionSort(n,k,array));

// 시간 초과