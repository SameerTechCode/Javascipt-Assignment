// Chapter # 9 to 11
// Q1
// let cityName = prompt("Which city are you from?");
// if (cityName === "karachi"){
//     console.log("Welcome to city of lights");
// }
// else{
//     console.log("Hello Welcome!");
// }

// Q2
// var gender = prompt("Please Enter your Gender!");
// if(gender === "male"){
//   alert("Good Morning Sir!")
// }
// else if (gender === "female"){
//     alert("Good Morning Maam!");
// }else{  // if you type wrong so you are not gender
//    alert("Sorry! You are not Gender..")
// }

// Q3
// var signalcolor = prompt("Please Enter this Color for this one: Red , Green , Yellow");
// if (signalcolor === "Red"){
//     alert("Must Stop!")
// }
// else if (signalcolor === "Yellow"){
//     alert("Ready to Move!")
// }
// else if (signalcolor === "Green"){
//     alert("Move Now!")
// }

// Q4
// var fuel = parseInt( prompt("Enter your Remaining Fuel in Your Car in litre!"));
// if (fuel < 0.25){
//       alert("Please refill the fuel in your Car");
// }else {
//     alert("You have enough refuel")
// }

// Q5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
f (percentage >= 90) {
//      grade = 'A';
//      remarks = 'Excellent work!';
//  } else if (percentage >= 80) {
//      grade = 'B';
//      remarks = 'Good job!';
//  } else if (percentage >= 70) {
//      grade = 'C';
//      remarks = 'Fair performance.';
//  } else if (percentage >= 60) {
//      grade = 'D';
//      remarks = 'Needs improvement.';
//  } else {
//      grade = 'F';
//      remarks = 'Failed. Better luck next time.';
//  }

//   document.write(`<h2>Results:</h2> <br> <p>Total Marks: ${totalMarks}</p> <br> <p>Marks Obtained: ${obtainedMarks}</p> <br> <p>Percentage: ${percentage.toFixed(2)}%</p> <br> <p>Grade: ${grade}</p> <br> <p>Remarks: ${remarks}</p>`)

// Prompt the user for marks and total marks// }
// if (false) {
//     alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// // document.write("a: given condition for variable a is true <br> b: (No alert) <br> c: condition 2 is true, condition 4 is true <br> d: The cost equals <br> e: True <br> f: car is smaller than cat")

// // Q6
var English = parseInt(prompt("Enter marks in English:"));
var Urdu = parseInt(prompt("Enter marks in Urdu:"));
var Math = parseInt(prompt("Enter marks in Math:"));
var totalMarks = parseInt(prompt("Enter total marks:"));
var ObtainedMarks = English + Urdu + Math;
var percentage = (ObtainedMarks / totalMarks) * 100;
var grade, remarks;
if (percentage >= 90) {
    grade = 'A';
    remarks = 'Excellent work!';
} else if (percentage >= 80) {
    grade = 'B';
    remarks = 'Good job!';
} else if (percentage >= 70) {
    grade = 'C';
    remarks = 'Fair performance.';
} else if (percentage >= 60) {
    grade = 'D';
    remarks = 'Needs improvement.';
} else {
    grade = 'F';
    remarks = 'Failed. Better luck next time.';
}
document.write(`
    <h2>Results:</h2> 
    <br> 
    <p>Total Marks: ${totalMarks}</p> 
    <br> 
    <p>Marks Obtained: ${ObtainedMarks}</p> 
    <br> 
    <p>Percentage: ${percentage.toFixed(2)}%</p> 
    <br> 
    <p>Grade: ${grade}</p> 
    <br> 
    <p>Remarks: ${remarks}</p>
`);

// Q10
// var temperature = parseInt( prompt("Enter today Temperature!"));
// if (temperature > 40){
//     alert("It is too hot outside")
// }else if(temperature > 30){
//     alert("The weather today is Normal")
// }else if(temperature > 20){
//     alert("Today Weather is Cool")
// }else if (temperature > 10){
//     alert("OMG! Today's weather is so Cool")
// }else {
//     alert("WOW! Today weather is very Good.")
// }

// Q7
// var secretnumber = 8;
// var guessnumber = parseInt(prompt("Guess the secret number(1 to 10)",10));
// if (guessnumber === secretnumber){
//     alert("Bingo! Correct answer");
// }else if (guessnumber === secretnumber + 1){
//     alert("Close enough to the correct answer.");
// }else {
//     alert("Sorry, that's not correct. Try again!");
// }

// Q11
// var firstNumber = prompt("Enter your first Number!");
// var secondNumber = prompt("Enter your second Number!");
// var operation = prompt("Enter the Operation +,-,*,/,%");

// if (operation === "+") {
//     alert(firstNumber + secondNumber);
// } else if (operation === "-") {
//     alert(firstNumber - secondNumber)
// } else if (operation === "*") {
//     alert(firstNumber * secondNumber)
// } else if (operation === "/") {
//     alert(firstNumber / secondNumber)
// } else if (operation === "%") {
//     alert(firstNumber % secondNumber)
// } else {
//     alert("Invalid operation. Please enter one of +, -, *, /, %");
// }

// Q8
// var number = parseInt(prompt("Please Enter your number Which is Divisible by 3"));
// if  (number % 3 === 0) {
//     alert("Is Divisible by 3")
// } else {
//     alert("Is not Divisible by 3")
// }

// Q9
// User se number input lene ke liye prompt ka use karein
// var userInput = parseInt(prompt("Please Enter your Number:"));
// Check karein ki number even hai ya odd
// if (userInput % 2 === 0) {
//   // Agar number 2 se divide karne par remainder 0 hai, to number even hai
//   alert("This is Even Number..");
// } else {
//   // Agar number 2 se divide karne par remainder 1 hai, to number odd hai
//   alert( "This is Odd Number..");
// }
