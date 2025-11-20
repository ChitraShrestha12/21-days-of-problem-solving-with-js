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

## Question 2

Print Inverted Right-Angled Triangle.

## Code

```javascript
const rows = 5;
for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 1; j <= rows - i + 1; j++) {
    str = str + "*";
  }
  console.log(str);
}
```

## Question 3

Print Pyramid Pattern.

## Code

```javascript
const rows = 5;
for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 1; j<=rows-i+1; j++) {
    str=str+" "
  }
  console.log(str);
  for(let j=1;j<=2*i-1;j++){
    str=str+"*"
  }
  console.log(str);
}
```

## Question 4

Print Hollow Square Pattern.

## Code

```javascript
const rows = 4
for(let i=1;i<=rows;i++){
  let str = ''
  for(let j=1;j<=rows;j++){
    if(i==1 || i==rows || j==1 || j==rows){
      str = str+'*'
    }else{
      str=str+' '
    }
  }
  console.log(str);
}
```

## Question 5

Print Alternating Binary Triangle.

## Code

```javascript
const rows = 4;
for(let i=1;i<=rows;i++){
  let str=''
  for(let j=1;j<=i;j++){
    str=str+(i%2==1?j%2:(j+1)%2)
  }
  console.log(str)
}
```