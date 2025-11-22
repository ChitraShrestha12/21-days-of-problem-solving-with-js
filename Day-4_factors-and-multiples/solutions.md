## Day 4 – Factors & Multiples

## Question 1

Print All Factors of a Number.

## Code

```javascript
const num = 24;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
```

## Question 2
Print All Multiples of a Number up to N.

## Code

```javascript
function multipleUpto(num,limit) {
  const nums = [];
  for (let i = 1; i <= limit/num; i++) {
    nums.push(num * i);
  }
  return nums;
}
console.log(multipleUpto(5,30));
```
