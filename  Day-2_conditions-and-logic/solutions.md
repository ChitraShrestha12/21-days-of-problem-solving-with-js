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

## Question 3

Calculate Electricity Bill.

## Code

```javascript
function calculateBill(units) {
  let total = 0;
  if (units <= 100) {
    total = 100 * 5;
  } else if (units <= 200) {
    total = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    total = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    total = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }
  return total;
}
console.log(calculateBill(230));
```

## Question 4

Check if a Character is a Vowel or Consonant.

## Code

```javascript
function checkVowelAndConsonant(char = "") {
  if (typeof char !== "string" || char.length !== 1 || !/[a-z]/i.test(char))
    return "Not a valid Alphabet!";
  else if ("aeiou".includes(char.toLowerCase())) {
    return "Vowel";
  } else {
    return "Consonant";
  }
}
console.log(checkVowelAndConsonant("a"));
console.log(checkVowelAndConsonant("B"));
console.log(checkVowelAndConsonant(8)); 
```

## Question 5

Check Triangle Type Using Sides and Angles.

## Code

```javascript
function checkIsTriangle(a, b, c) {
  if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
    return "Right Angled Triangle";
  } else if (a == b && b == c) {
    return "Equilateral Triangle";
  } else if (a == b || b == c || c == a) {
    return "Isosceles Triangle";
  } else {
    return "Scalene Triangle";
  }
}
console.log(checkIsTriangle(3, 4, 5));
console.log(checkIsTriangle(2, 2, 5));
console.log(checkIsTriangle(5, 5, 5));

```