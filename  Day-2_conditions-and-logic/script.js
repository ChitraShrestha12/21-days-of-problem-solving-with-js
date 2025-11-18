function checkCharacterType(char){
  if(char===undefined || char.length!=1){
    return "Invalid Input!"
  }else if(!isNaN(char)){
    return "It's a digit!"
  }else if(char.charCodeAt()>=65 && char.charCodeAt()<=90){
    return "It's a Uppercase!"
  }else if(char.charCodeAt()>=97 && char.charCodeAt()<=122){
    return("It's a Lowercase!")
  }else{
    return "It's a symbol!"
  }
}
console.log(checkCharacterType("A")); // It's an Uppercase!
console.log(checkCharacterType("a")); // It's a Lowercase!
console.log(checkCharacterType("5")); // It's a digit!
console.log(checkCharacterType("@")); // It's a symbol!
console.log(checkCharacterType());    // Invalid Input!
