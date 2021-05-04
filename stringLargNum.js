// “FwrtY45KHL120mn10P”

function sumLargestNum(string) {
  let number = 0;
  let bool = false;
  let curBool = true;
  let curStrNum = "";
  for (let i = 0; i < string.length; i++) {
    if (Number.isNaN(Number(string[i])) !== Number.isNaN(NaN)) {
      if (string[i - 1] === "-") {
        curStrNum += "-";
      }
      curStrNum += string[i];
      curBool = true;
    } else {
      number += Number(curStrNum);
      curStrNum = "";
      curBool = false;
    }

    if (i + 1 === string.length) {
      number += Number(curStrNum);
    }
  }
  return number;
}

console.log(sumLargestNum("t1-2lop12"));
