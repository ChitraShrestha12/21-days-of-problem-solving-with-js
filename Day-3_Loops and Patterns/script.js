const rows = 5;
let space = 0;
let star = 2 * rows - 1;
for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 1; j <= space; j++) {
    str += "   ";
  }
  for (let j = 1; j <= star; j++) {
    str += " * ";
  }
  space++;
  star -= 2;
  console.log(str);
}
