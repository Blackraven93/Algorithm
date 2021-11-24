# 선택 정렬 (Selection Sort)
## 앞에서 부터 최솟값을 정렬


```javascript
const selectionSort = (array) => {
    // 배열을 앞에서 부터 돈다
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    // i 보다 1큰 값으로 배열을 돈다
    for (let j = i + 1; j < array.length; j++) {
        // 시작하는 미니멈 인덱스 보다 작은 경우에
      if (array[minIndex] > array[j]) {
          // 최소 인덱스 값을 변수에 저장
        minIndex = j;
      }
    }
    // 포문을 한번 다 돌았는데 최소 값이 변했다면
    if (minIndex !== i) {
        // 변환
      let swap = array[minIndex];
      array[minIndex] = array[i];
      array[i] = swap;
    }
  }
  return array;
};
```
![Selection Sort](https://blog.kakaocdn.net/dn/cSAFhj/btqwXd06SNh/kaKR9rl4IGEwH9JFRQSsw0/img.gif)

### 풀이 순서

1. 배열의 앞에서 부터 순회하고 첫 인덱스를 저장한다.
2. **arr[i+1]** 부터 끝까지 순회한다.
3. 이때 처음에 저장한 **arr[i]** 보다 작은 값이 있다면
    처음에 저장한 minIndex값을 교체한다.
4. **i+1** 의 배열을 순회한 후 minIndex 값과 초기 i 값을 비교한다.
5. 만약 minIndex값이 변화 했다면 변환해준다.
6. return 배열을 출력한다.

#### 예제 문제




