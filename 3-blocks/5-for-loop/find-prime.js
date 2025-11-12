var number = Number(prompt("Enter a positive integer: "));

for (let i = 2; i <= number; i++) {
  if (number % i === 0) {
    if (i === number) {
      console.log(number + " is a prime number.");
    } else {
      console.log(number + " is not a prime number.");
      break;
    }
  }
}