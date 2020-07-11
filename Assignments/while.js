console.log("Print all numbers btw -10 and 19");
var num1 = -10;
while (num1 <= 19) {
  console.log(num1);
  num1++;
}
console.log("Print all even numbers btw 10 and 40");
var num2 = 10;
while (num2 <= 40) {
  console.log(num2);
  num2 = num2 + 2;
}
console.log("Print all odd numbers between 300 and 333");
var num3 = 300;
while (num3 <= 333) {
  console.log(num3 + 1);
  num3 = num3 + 2;
}
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var num4 = 5;
while (num4 <= 50) {
  if (num4 % 5 == 0) {
    if (num4 % 3 == 0) {
      console.log(num4);
    }
  }
  num4 = num4 + 1;
}
// console.log("Print all numbers btw -10 and 19");
// var num1 = -10;
// for (var i = num1; i <= 19; i++) {
//   console.log(i);
// }
// console.log("Print all even numbers btw 10 and 40");
// var num2 = 10;
// for (var i = 10; i <= 40; i += 2) {
//   console.log(i);
// }
// console.log("Print all odd numbers between 300 and 333");
// var num3 = 300;
// for (var i = num3; i < 333; i += 2) {
//   console.log(i + 1);
// }
// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// for (var i = 5; i < 50; i++) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log(i);
//   }
// }
