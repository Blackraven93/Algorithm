# 퀵 정렬 (Quick Sort)
## Divde & Conquer

### Stable

```javascript
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
```


### In place
```javascript
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
```