function checkPhoneNum(phoneNum) {
  if (typeof phoneNum !== "string" && typeof phoneNum !== "number") {
    return `Error: Input value is not a number or string`;
  }

  if (typeof phoneNum === "number" && String(phoneNum).length === 10) {
    return phoneNum;
  }

  let numberWithoutSpace = "";
  for (let i = 0; i < phoneNum.length; i++) {
    if (phoneNum[i] === " ") {
      continue;
    }
    numberWithoutSpace += phoneNum[i];
  }

  if (
    numberWithoutSpace.length === 10 &&
    Number.isNaN(Number(numberWithoutSpace)) !== Number.isNaN(NaN)
  ) {
    return numberWithoutSpace;
  }

  if (numberWithoutSpace.length === 11 && numberWithoutSpace[0] === "+") {
    let result = "";
    for (let i = 1; i < numberWithoutSpace.length; i++) {
      result += numberWithoutSpace[i];
    }
    return result;
  }

  return `Bad Number`;
}

console.log(checkPhoneNum("+0000567892"));
