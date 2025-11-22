function multipleUpto(num,limit) {
  const nums = [];
  for (let i = 1; i <= limit/num; i++) {
    nums.push(num * i);
  }
  return nums;
}
console.log(multipleUpto(5,30));
