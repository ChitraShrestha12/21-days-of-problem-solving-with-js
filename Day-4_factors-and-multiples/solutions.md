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
