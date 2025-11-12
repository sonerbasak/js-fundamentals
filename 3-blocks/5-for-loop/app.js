// for loop

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("Iteration number: " + i);
  }
  else {
    console.log(i + " is not even");
  }
}

let sum = 0;

for (let value = 50; value > 0; value--) {
  sum += value;
}
console.log("Sum: " + sum);