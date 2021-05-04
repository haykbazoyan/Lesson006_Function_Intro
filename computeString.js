function computeNewStr(string) {
  let newString = string.split("");
  let res = [];

  for (let i = 0; i < newString.length; i += 3) {
    if (newString.length - i < 3) {
      break;
    }
    let letter = newString[i];

    newString[i] = newString[i + 1];
    newString[i + 1] = newString[i + 2];
    newString[i + 2] = letter;
  }

  return newString;
}

console.log(computeNewStr("dfgjkloy"));
