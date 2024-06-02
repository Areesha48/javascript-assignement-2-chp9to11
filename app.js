//question 1//
let city=prompt("enter your city name")
if(city === 'karachi')
alert("Welcome to the city of light");

//question 2//
let gender=prompt("enter your gender")
if(gender ==='male'){
  alert("Goodmorning sir");
}
  else if(gender=== 'female'){
    alert("Goodmorning Ma'm");
  }
    

// question 3//
let color = prompt("Enter the color of the road traffic signal (Red, Yellow, Green): ").toLowerCase();
let message;

document.write(`
<table border="1">
<tr>
<th>Signal Color</th>
<th>Message</th>
</tr>
<tr>
<td>Red</td>
<td>Stop</td>
</tr>
<tr>
<td>Yellow</td>
<td>Ready to move</td>
</tr>
<tr>
<td>Green</td>
<td>Go now</td>
</tr>
</table>
`);

switch (color) {
  case "red":
    message = "Must Stop!";
    break;
  case "yellow":
    message = "ready to move...";
    break;
  case "green":
    message = "move now";
    break;
  default:
    message = "Invalid color!";
}
// alert(message);

  //question4//
 
  let fuel = prompt("Enter remaining fuel in liters");
  if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
  }
  
//question 5//
let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}


//question 6//

let totalMarks = 300;
let marks1 = parseInt(prompt("Enter marks in subject 1: "), 10);
let marks2 = parseInt(prompt("Enter marks in subject 2: "), 10);
let marks3 = parseInt(prompt("Enter marks in subject 3: "), 10);

let obtainedMarks = marks1 + marks2 + marks3;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade;
let remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent!";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<b>Mark Sheet</b><br>");
document.write(`Total Marks: ${totalMarks}<br>`);
document.write(`Marks Obtained: ${obtainedMarks}<br>`);
document.write(`Percentage: ${percentage.toFixed(2)}%<br>`);
document.write(`Grade: ${grade}<br>`);
document.write(`Remarks: ${remarks}<br>`);


// let totalMarks = 300;
// let marks1 = parseFloat(prompt("Enter marks in subject 1: "));
// let marks2 = parseFloat(prompt("Enter marks in subject 2: "));
// let marks3 = parseFloat(prompt("Enter marks in subject 3: "));

// let percentage = ((marks1 + marks2 + marks3) / totalMarks) * 100;
// let grade;
// let remarks;

// if (percentage >= 80 +"<br>") {
//   grade = "A-one";
//   remarks = "Excellent!";
// } else if (percentage >= 70 + "<br>") {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60 +"<br>") {
//   grade = "B";
//   remarks = "you need to improve";
// } 
//  else {
//   grade = "Fail";
//   remarks = "Sorry";
// }
// document.write("<b>Mark Sheet</b><br>");
// document.write(`Total Marks: ${totalMarks}<br>`);
// document.write(`Marks Obtained: ${obtainedMarks}<br>`);
// document.write(`Percentage: ${percentage.toFixed(2)}%<br>`);
// document.write(`Grade: ${grade}<br>`);
// document.write(`Remarks: ${remarks}<br>`);

//question 7//
let secretNumber = parseInt(Math.random() * 10) + 1; // Store a secret number between 1 and 10

let userGuess = parseInt(prompt("Guess the secret number (1-10): "));

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again!");
}

 //question 8//
 let num = parseInt(prompt("Enter a number: "));

if (num % 3 === 0) {
  alert(`${num} is divisible by 3`);
} else {
  alert(`${num} is not divisible by 3`);
}

//question 9//
let Num = parseInt(prompt("Enter a number: "));

if (num % 2 === 0) {
  alert(`${num} is an even number`);
} else {
  alert(`${num} is an odd number`);
}

//question 10//
let temperature = prompt("Enter the temperature:");
temperature = Number(temperature);

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today's Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today's weather is so Cool.");
} else {
  alert("Please enter a valid temperature.");
}

//question 11//
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let operation = prompt("Enter the operation (+, -, *, /, %): ");

if (operation === "+") {
  result = num1 + num2;
  alert(`The result is: ${result}`);
} else if (operation === "-") {
  result = num1 - num2;
  alert(`The result is: ${result}`);
} else if (operation === "*") {
  result = num1 * num2;
  alert(`The result is: ${result}`);
} else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
    alert(`The result is: ${result}`);
  } else {
    alert("Error: Division by zero is not allowed");
  }
} else if (operation === "%") {
  if (num2 !== 0) {
    result = num1 % num2;
    alert(`The result is: ${result}`);
  } else {
    alert("Error: Division by zero is not allowed");
  }
} else {
  alert("Error: Invalid operation");
}
