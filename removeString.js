// “This is some text.”, “is”

function removeStr(str1, str2) {
  let result = "";
  let curText = "";
  let checker = false;
  let breaker = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        checker = true;
        break;
      } else {
        checker = false;
        curText += str1[i];
        break;
      }
    }
  }

  return curText;
}

console.log(removeStr("This is some text.", "is"));
