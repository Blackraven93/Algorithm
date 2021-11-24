const bubbleSort = (arr) => {
    let noSwaps;

    if (Array.isArray(arr) && arr.length !== 0){
        arr = arr.map(e => parseInt(e))
        for (let i = arr.length; i > 0; i--) {
            noSwaps = true;
            for (let j = 0; j < i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    noSwaps = false;
                }
            }
            if (noSwaps) break;
        }
        return arr;
    } else {
        return 'This is not Array Please input array parameter'
    }
}


/**
 * Scope1
 * const bubbleSort = (arr) => {
 *  Scope2
 * }
 * 
 * Scope2
 * let noSwaps;
 * for (let i = arr.length; i>0; i--) {
 *  Scope3
 * }
 * return arr;
 * 
 * Scope3
 * noSwaps = true;
 * for(let j = 0; j <i - 1; j++) {
 *  Scope4
 * }
 * if (noSwaps) break;
 * 
 * 
 * Scope4
 * if (arr[j] > arr[j+1]) {
 *  Scope5
 * }
 * 
 * Scope5
 * let temp = arr[j]
 * arr[j] = arr[j+1];
 * arr[j+1] = temp;
 * noSwaps = false;
 * 
 * Tap을 4번씀 (Indent 4)
 */

const f = (array) => {
    let noSwap
    for (let i = array.length-1; i > 0; i--) {
        noSwap = true
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                // 바꿈
                let temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp
                noSwap = false
            }
        }
        if (noSwap) break;
    }
    
    return array
}

let testArr = [1,5,6,7,9,22,33,44,55,66,1,2,3,4,5,6,6]

console.log(f(testArr));