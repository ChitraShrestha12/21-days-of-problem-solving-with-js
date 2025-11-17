## Day 2 – Conditions & Logic

## Question 1

Find the Maximum of Three Numbers.

## Code

```javascript
const a = 10;
const b = 20;
const c = 5;

if (a > b && a > c) {
  console.log("a is greater than b and c");
} else if (b > a && b > c) {
  console.log("b is greater than a and c");
} else {
  console.log("c is greater than a and b");
}

```

## Question 2

Check if a Number is Positive, Negative, or Zero.

## Code

```javascript
const a = 10;
const b = 20;
const c = 5;

function checkNumber(a) {
  if (a > 0) {
    return "Positive Number!";
  }
  if (a < 0) {
    return "Negetive Number!";
  }
  return "Zero!";
}
console.log(checkNumber(-60));
```