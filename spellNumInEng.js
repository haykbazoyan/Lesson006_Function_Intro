// 0 to 999,999

function numArrWords() {}

function spellNumInEng(number) {
  let numStr = String(number);
  let numStrArr_0_9 = [
    "zero",
    "one",
    "two",
    "tree",
    "fore",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let numStrArr_10_19 = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let numStrArr_20_90 = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (numStr.length === 1) {
    return `${numStrArr_0_9[Number(numStr)]}`;
  } else if (
    numStr.length === 2 &&
    Number(numStr) > 10 &&
    Number(numStr) < 20
  ) {
    return `${numStrArr_10_19[Number(numStr[1])]} `;
  } else if (
    numStr.length === 2 &&
    Number(numStr) > 19 &&
    Number(numStr) < 100
  ) {
    return `${numStrArr_20_90[Number(numStr[0])]}${
      numStrArr_0_9[Number(numStr[1])]
    } `;
  } else if (numStr.length === 3) {
    return `${numStrArr_0_9[Number(numStr[0])]} hundred ${
      numStrArr_20_90[Number(numStr[1])]
    }${numStrArr_0_9[Number(numStr[2])]}`;
  } else if (numStr.length === 4) {
    return `${numStrArr_0_9[Number(numStr[0])]} thousand ${
      numStrArr_0_9[Number(numStr[1])]
    } hundred ${numStrArr_20_90[Number(numStr[2])]}${
      numStrArr_0_9[Number(numStr[3])]
    }`;
  } else if (numStr.length === 5) {
    if (Number(numStr[0]) === 1) {
      return `${numStrArr_10_19[Number(numStr[1])]} thousand ${
        numStrArr_0_9[Number(numStr[2])]
      } hundred ${numStrArr_20_90[Number(numStr[3])]}${
        numStrArr_0_9[Number(numStr[4])]
      }`;
    } else {
      return `${numStrArr_20_90[Number(numStr[0])]}${
        numStrArr_0_9[Number(numStr[1])]
      } thousand ${numStrArr_0_9[Number(numStr[2])]} hundred ${
        numStrArr_20_90[Number(numStr[3])]
      }${numStrArr_0_9[Number(numStr[4])]}`;
    }
  } else if (numStr.length === 6) {
    // 112345
    if (Number(numStr[1]) === 1) {
      return `${numStrArr_0_9[Number(numStr[0])]} hundred ${
        numStrArr_10_19[Number(numStr[2])]
      } thousand ${numStrArr_0_9[Number(numStr[3])]} hundred ${
        numStrArr_20_90[Number(numStr[4])]
      }${numStrArr_0_9[Number(numStr[5])]}`;
    } else {
      return `${numStrArr_0_9[Number(numStr[0])]} hundred ${
        numStrArr_20_90[Number(numStr[1])]
      }${numStrArr_0_9[Number(numStr[2])]} thousand ${
        numStrArr_0_9[Number(numStr[3])]
      } hundred ${numStrArr_20_90[Number(numStr[4])]}${
        numStrArr_0_9[Number(numStr[5])]
      }`;
    }
  }
}

console.log(spellNumInEng(234561));
