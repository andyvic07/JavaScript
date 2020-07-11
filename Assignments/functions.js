//function for even numbers
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
//function for factorial
function factorial(num) {
  var fact = 1;
  if (num == 0 || num == 1) {
    return fact;
  } else {
    for (var i = num; i >= 1; i--) {
      fact = fact * i;
    }
    return fact;
  }
}
//function for converting snake case to kebab case
function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
