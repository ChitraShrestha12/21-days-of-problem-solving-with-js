## Day 3 – Loops & Patterns

## Question 1

Print Right-Angled Star Triangle.

## Code

```javascript
const rows = 5;
for (let i = 1; i < rows; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + "*";
  }
  console.log(str);
}
```