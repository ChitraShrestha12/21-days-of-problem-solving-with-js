## Day-1_simple-number-problems

## Question 1

Write a JavaScript program that prints the numbers from 1 to n using a `for` loop.

## Code

```javascript
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

## Question 2

Print Numbers from N to 1 without changing the loop condition of above question.

## Code

```javascript
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(num - i + 1);
}
```

## Question 3

Print All Even Numbers from 1 to N.

## Code

```javascript
const num = 60;

for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
```
