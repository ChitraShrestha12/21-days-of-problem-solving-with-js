const rows = 4;
for(let i=1;i<=rows;i++){
  let str=''
  for(let j=1;j<=rows-i;j++){
    str=str+'   '
  }
  for(let j=1;j<=rows;j++){
    str+=' * '
  }
  console.log(str);
  
}
