// break and continue statements

let counter = 0;

while (counter < 10) {
  if (counter == 5) {
    break;
  }

  console.log("Counter value with break:", counter);
  counter++;
}

let counter2 = 0;

while (counter2 < 10) {
  counter2++;

  if (counter2 == 5) {
    continue;
  }

  console.log("Counter value with continue:", counter2);
}