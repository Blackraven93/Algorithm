function solution(name) {
  let answer = 0;
  let count = 0;
  count += name.length - 1; // 커서 이동
  let arr = name.split("");
  for (const i of arr) {
    if (i !== "A") {
      i.charCodeAt() > 77
        ? i !== "Z" && (count += 90 - i.charCodeAt() + 1)
        : (count += i.charCodeAt() - 65);
    } else {
      continue;
    }
  }

  /* 이거 생각하는데 오래걸렸음
        각 인덱스 마다 right와 left를 비교하여 다음 인덱스로 가는 최단경로를 비교하면 된다.
        언제 뒤로 가야지? A와의 관계성 생각해보기
    */

  return answer;
}

// solution('JEROEN') return 56
// solution('JAN') return 23
