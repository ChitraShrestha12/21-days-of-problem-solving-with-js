const num = 2000;
let sumOfEven = 0;

for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) sumOfEven += i;
}
console.log(sumOfEven);
