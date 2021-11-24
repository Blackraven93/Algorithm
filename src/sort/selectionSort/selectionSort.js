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
    console.log(`${i}회전: ${array}`);
  }
  return array;
};
console.log(selectionSort([5, 4, 3, 2, 1]));




const f = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            // 작은 수가 존재한다면
            let temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(f([4,2,6,65,4,33,2,4,-55]));