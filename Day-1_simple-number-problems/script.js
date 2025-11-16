const num = 10;
let sumOfOdd = 0;
for (let i = 1; i <= num; i++) {
  if (i % 2 != 0) {
    sumOfOdd += i;
  }
}
console.log(sumOfOdd);
