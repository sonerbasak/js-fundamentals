// conditional statements: if...else

let temperature = 15;

if (temperature >= 20) {
  console.log("Temperature is", temperature, ". It's a warm day");
}
else {
  console.log("Temperature is", temperature, ". It's a cold day");
}

// calculate mean grade example
let grade1 = prompt("Enter your first grade:");
let grade2 = prompt("Enter your second grade:");
let grade3 = prompt("Enter your third grade:");

let meanGrade = (grade1 * .3) + (grade2 * .3) + (grade3 * .4);

console.log("Mean Grade:", meanGrade);
if (meanGrade >= 50) {
  console.log("You passed the course");
}
else {
  console.log("You failed the course");
}
