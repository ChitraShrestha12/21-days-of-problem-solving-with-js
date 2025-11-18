function checkLeapYear(year) {
  if(year === undefined || /[a-z]/.test(year)){
    return "Invalid Input"
  }
  else if ((year % 4 == 0 && year % 100 !== 0 )|| year % 400 == 0) {
    return "It's a leap year!";
  }else{
    return "It's not a leap year!";
  }
}
console.log(checkLeapYear(2000));
console.log(checkLeapYear(2250));
console.log(checkLeapYear());
console.log(checkLeapYear("r"));
