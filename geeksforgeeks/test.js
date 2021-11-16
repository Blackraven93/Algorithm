class Solution {
  printNos(n) {
    //code here
    if (n === 0) return;
    this.printNos(n - 1);
    process.stdout.write(`${n} `);
  }
}
