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
