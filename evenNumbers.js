// 19, 42     “20, 22, 24, 26, 28, 40, 42”

function findEvenNumbers(minNum, maxNum) {
  let resultEvenNum = "";

  for (let i = minNum; i <= maxNum; i++) {
    let strNum = String(i);
    let check = false;

    for (let j = 0; j < strNum.length; j++) {
      if (Number(strNum[j]) % 2 === 0) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if (check) {
      resultEvenNum += strNum;
      resultEvenNum += ", ";
    }
  }
  if (resultEvenNum.length === 0) {
    return `Such numbers does not exist.`;
  }

  return resultEvenNum;
}

console.log(findEvenNumbers(20, 42));
