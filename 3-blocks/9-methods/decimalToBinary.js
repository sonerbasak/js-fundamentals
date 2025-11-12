value = prompt("Enter a decimal or binary number:");

function convertNumber(num) {
  let isBinary = isBinaryNumber(num);

  if (isBinary) {
    console.log("The number " + num + " is binary.");
    decimalValue = calculateDecimal(num);

    console.log("Its decimal equivalent is: " + decimalValue);
  }
  else {
    console.log("The number " + num + " is decimal.");
    binaryValue = calculateBinary(num);

    console.log("Its binary equivalent is: " + binaryValue);
  }
}

function isBinaryNumber(num) {
  var isBinary = true;
  for (var i = 0; i < num.length; i++) {
    if (num[i] == '0' || num[i] == '1') {
      continue;
    }
    else {
      isBinary = false;
      break;
    }
  }
}

function calculateDecimal(num) {
  let decimalValue = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 1) {
      decimalValue += Math.pow(2, num.length - i - 1);
    }
    else {
      continue;
    }
  }
  return decimalValue;
}

function calculateBinary(num) {
  let binaryValue = "";
  let decimalNum = parseInt(num);
  if (decimalNum != 0) {
    while (decimalNum > 0) {
      binaryValue = (decimalNum % 2) + binaryValue;
      decimalNum = Math.floor(decimalNum / 2);
    }
    return binaryValue;
  }
  return "0";
}
convertNumber(value);
