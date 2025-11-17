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
