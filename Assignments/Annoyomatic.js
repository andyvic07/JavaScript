// var answer = prompt("Are we there yet?");
// while (answer !== ("yes" && "yah")) {
//   var answer = prompt("are we there yet?");
// }
// if (answer === "yes" || "yah") {
//   alert("Yay,we finally made it");
// }
//Version 2
var answer = prompt("Are we there yet?");
while (answer.indexOf("yes" || "yah") === -1) {
  var answer = prompt("are we there yet?");
}

alert("Yay,we finally made it");
