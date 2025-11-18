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
