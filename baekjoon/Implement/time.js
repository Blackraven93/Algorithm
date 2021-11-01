const n = require("fs").readFileSync("./test/test.txt");
// n은 시간 ex) 5
const time = parseInt(n);

let count = 0;

for (let t = 0; t <= time; t++) {
  for (let m = 0; m < 60; m++) {
    for (let s = 0; s < 60; s++) {
      if ((String(t) + String(m) + String(s)).includes("3")) {
        count += 1;
      }
    }
  }
}

// 여기서 무엇을 몰랐지..?
// 1. 문자열을 붙인다는 생각
// 2. for 문을 3개 사용한다는 생각
// 3. 문자열로 치환해서 메서드를 사용한다는 생각

console.log(count);
