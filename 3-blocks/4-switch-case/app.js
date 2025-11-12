/*
1- budget
2- withdrawal
3- deposit money
4-exit
*/
let budget = 0;
let option = prompt(`Choose an option:
1- Budget
2- Withdrawal
3- Deposit Money
4- Exit
`);

switch (Number(option)) {
  case 1:
    alert(`Your budget is: $${budget}`);
    break;
  case 2:
    let withdrawalAmount = Number(prompt("Enter withdrawal amount:"));
    if (withdrawalAmount > budget) {
      alert("Insufficient funds!");
    } else {
      budget -= withdrawalAmount;
      alert(`You withdrew $${withdrawalAmount}. New budget: $${budget}`);
    }
    break;
  case 3:
    let depositAmount = Number(prompt("Enter deposit amount:"));
    budget += depositAmount;
    alert(`You deposited $${depositAmount}. New budget: $${budget}`);
    break;
  case 4:
    alert("Exiting...");
    break;
  default:
    alert("Invalid option selected.");

}
