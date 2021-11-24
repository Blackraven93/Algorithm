// 기본 quickSort

const quickSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const pivot = [array[0]] // 첫번째를 또 왜 다시 배열에 넣지?
    const left = []
    const right = [];

    for (let i = 1; i < array.length; i++) {
        // array[1] 부터 처음 보다 작으면
        if (array[i] < pivot) {
            left.push(array[i]);
        } else if (array[i] > pivot) {
            right.push(array[i])
        } else {
            pivot.push(array[i])
        }
    }

    console.log(`left : ${left}, pivot : ${pivot}, right : ${right}`)
    return quickSort(left).concat(pivot, quickSort(right));
}

const testArr = [5,3,4,2,3,5,7,8,9]

console.log(testArr);

const sorted= quickSort(testArr)

console.log(sorted);


// 아 너무 어렵다...
const quickSort2 = (array, left=0, right=array.length-1) => {
    // left right은 인덱싱
    if (left >= right) {
        return;
    }

    const mid = Math.floor((left+right) / 2);
    const pivot = array[mid];

    const divide = (array, left, right, pivot) => {
        while (left <= right) {
            while(array[left] < pivot) {
                left++;
            }

            while (array[right] > pivot) {
                right--
            }

            if (left <= right) {
                // 전형적인 방법
                let swap = array[left];
                array[left] = array[right];
                array[right] = swap
                left++;
                right--;
            }
        }
        return left;
    }

    const partition = divide(array, left, right, pivot);
    
    quickSort2(array, left, partition - 1);
    quickSort2(array, partition, right);
    return array;
}

console.log(quickSort2([2,3,11,44,553,443,135,80,546,-4,55,-2222,443543,553,22,31,1,22,33]));