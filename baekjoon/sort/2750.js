let input = require("fs")
  .readFileSync("./test/test.txt")
  .toString()
  .split("\r\n");

const example = input.map((element) => parseInt(element));

const length = example.shift();

console.log(length, example);

example.map((element, index) => {
  example[index + 1] < example[index] &&
    ([example[index], example[index + 1]] = [
      example[index + 1],
      example[index],
    ]);
});

console.log(example);
