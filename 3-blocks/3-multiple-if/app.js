// multiple if statements

let name = prompt("Enter your name:");
let tck = prompt("Enter your TCK number:");

function check(name, tck,) {
  if (name == "") {
    console.log("Name is required.");
    return;
  }
  if (tck == "") {
    console.log("TCK number is required.");
    return;
  }
  else if (tck.length != 11) {
    console.log("TCK number must be 11 digits.");
    return;
  }
  console.log("All inputs are valid.");
}

check(name, tck);

// calculate bki

let kg = prompt("Enter your weight in kg:");
let height = prompt("Enter your height in meters:");

function calculateBKI(kg, height) {
  if (kg == "" || height == "") {
    console.log("Weight and height are required.");
    return;
  }
  let bki = kg / (height * height);
  if (bki < 18.5) {
    console.log("Underweight");
  } else if (bki >= 18.5 && bki < 24.9) {
    console.log("Normal weight");
  } else if (bki >= 25 && bki < 29.9) {
    console.log("Overweight");
  } else {
    console.log("Obesity");
  }
}

calculateBKI(kg, height);