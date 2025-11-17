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