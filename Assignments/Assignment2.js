var age = prompt("What is your age?");
var odd = age % 2;
if (age < 0) alert("Error");
else if (age == 21) alert("Happy 21st Birthday!!");
else if (odd == 1) alert("Your age is odd!");
else if (age % Math.sqrt(age) == 0) alert("Perfect Square!");
else alert("You are " + age + " years old!");
