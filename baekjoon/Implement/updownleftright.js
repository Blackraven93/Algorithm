// 주소 /dev/stdin

const [n, ...arr] = require("fs")
  .readFileSync("./test/test.txt")
  .toString()
  .trim()
  .split(/\s+/);

const scare = parseInt(n);

let [x, y] = [1, 1];

for (let i = 0; i < arr.length; i++) {
  if (y === 1 && arr[i] === "L") {
    continue;
  } else if (y === scare && arr[i] === "R") {
    continue;
  } else if (x === 1 && arr[i] === "U") {
    continue;
  } else if (x === scare && arr[i] === "D") {
    continue;
  }

  switch (arr[i]) {
    case "L":
      y -= 1;
    case "R":
      y += 1;
    case "U":
      x -= 1;
    case "D":
      x += 1;
  }
  console.log(x, y);
}
