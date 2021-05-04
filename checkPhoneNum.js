function checkPhoneNumDig(strNum) {
  let checker = true;
  for (let i = 0; i < strNum.length; i++) {
    if (
      Number.isNaN(Number(strNum[i])) === Number.isNaN(NaN) ||
      strNum[i] === " "
    ) {
      return `Bad Number`;
    } else {
      continue;
    }
  }
  return strNum;
}

// Main Function
function checkPhoneNum(phoneNum) {
  if (typeof phoneNum !== "string" && typeof phoneNum !== "number") {
    return `Error: Input value is not a number or string`;
  }

  if (typeof phoneNum === "number" && String(phoneNum).length === 10) {
    return phoneNum;
  } else if (typeof phoneNum === "string" && phoneNum.length === 10) {
    return checkPhoneNumDig(phoneNum);
  }

  if (phoneNum[0] === "+" && phoneNum.length === 11) {
    for (let i = 1; i < phoneNum.length; i++) {
      if (
        Number.isNaN(Number(phoneNum[i])) === Number.isNaN(NaN) ||
        phoneNum[i] === " "
      ) {
        return `Bad Number`;
      }
    }

    let resNum = "";
    for (let i = 1; i < phoneNum.length; i++) {
      resNum += phoneNum[i];
    }
    return resNum;
  } else if (phoneNum[3] === " " && phoneNum.length === 11) {
    for (let i = 0; i < phoneNum.length; i++) {
      if (i === 3) {
        continue;
      } else if (
        Number.isNaN(Number(phoneNum[i])) === Number.isNaN(NaN) ||
        phoneNum[i] === " "
      ) {
        return `Bad Number`;
      }
    }

    let resNum = "";
    for (let i = 0; i < phoneNum.length; i++) {
      if (i === 3) {
        continue;
      }
      resNum += phoneNum[i];
    }
    return resNum;
  }
  return `Bad Number`;
}

console.log(checkPhoneNum("3798005450"));
