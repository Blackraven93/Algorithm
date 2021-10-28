const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = [];
  let commandCount = commands.length;
  for (let i = 0; i < commandCount; i++) {
    // command 갯수만큼 회전
    let newArr = array.slice(commands[i][0] - 1, commands[i][1]);
    // 나누기
    if (newArr.length > 3) {
      for (let i2 = 0; i2 < newArr.length; i2++) {
        newArr.map((element, index) => {
          newArr[index] > newArr[index + 1] &&
            ([newArr[index], newArr[index + 1]] = [
              newArr[index + 1],
              newArr[index],
            ]);
        });
      }
      answer.push(newArr[commands[i][2] - 1]);
    } else {
      newArr[0] > newArr[1] &&
        ([newArr[0], newArr[1]] = [newArr[1], newArr[0]]);
      answer.push(newArr[commands[i][2] - 1]);
    }
  }
  return answer;
}

// 반례 찾아보기
console.log(solution(array, commands));
