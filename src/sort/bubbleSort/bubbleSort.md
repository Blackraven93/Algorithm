# 버블 정렬 (Bubble Sort)
## 가장 큰 값이 정렬되는 값


```javascript
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

```

![Bubble sort](https://media.vlpt.us/images/young_mason/post/1b3c7830-cbdc-450f-af4f-dcefe2f140d3/bubbleSort.gif)

### 풀이 순서

1. **arr[i]** 를 사용하는 반복문은 배열의 마지막 값부터 0까지 순회
2. j는 배열의 첫번째 값으로 시작해 **a[i-1]** 까지 순회한다.
3. 만약 **arr[j] > arr[j+1]** 조건을 만족하면 두 위치를 바꾼다.
4. temp를 이용해 값의 손상 없이 교환한다.
5. 위치를 변환했을 때 noSwaps의 (Toggle 변수) 값을 True로 변환해준다.

#### 예제 문제


