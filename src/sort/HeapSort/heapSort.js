let arr = [1,2,55,6,7,75,3]


const heapify = (arr, lastIndex) => {
    let index = parseInt(lastIndex / 2) - 1

    while (index >= 0) {
        const left = arr[index*2+1]
        const right = arr[index*2+2];

        if (left >= right && arr[index] < left) {
            const temp = arr[index];
            arr[index] = left;
            arr[index * 2 + 1] = temp;
        } else if (right > left && arr[index] < right) {
            const temp = arr[index];
            arr[index * 2 + 2] = temp;
            arr[index] = right;
        }
        index--
    }
    return arr;
}

const heapSort = (arr) => {
    for (let i = arr.length-1; i >= 0; i--) {
        arr = heapify(arr, i);

        if (arr[0] > arr[i]) {
            const temp = arr[i];
            arr[i] = arr[0]
            arr[0] = temp;
        }
    }
    return arr;
}

const main = () => {
    arr = heapSort(arr);
    console.log(arr);
} 

main()

// 다른 코드

let arrLen;

const swap = (input, i, j) => {
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}

const heapRoot = (input, i) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
  
    if (left < arrLen && input[left] > input[max]) {
      max = left;
    }
  
    if (right < arrLen && input[right] > input[max]) {
      max = right;
    }
  
    if (max != i) {
      swap(input, i, max);
      heapRoot(input, max);
    }
  }
  
const heapSort = (input) => {
    arrLen = input.length;
  
    for (let i = Math.floor(arrLen / 2); i >= 0; i--) {
      heapRoot(input, i);
    }
  
    for (let i = input.length - 1; i > 0; i--) {
      swap(input, 0, i);
      arrLen--;
  
      heapRoot(input, 0);
    }
  }
  
  let nums = [1, 3, 5, 6, 2, 0, 8, 9, 7, 4];
  
  heapSort(nums); // 힙 정렬 시행
  console.log(nums);


// 분석해보기