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
