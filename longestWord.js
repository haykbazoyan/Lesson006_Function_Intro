function findLongestWord(string) {
  let newString = string.split(" ");
  let maxNum = 0;
  let findIndex = 0;

  for (let i = 0; i < newString.length; i++) {
    if (newString[i].length > maxNum) {
      maxNum = newString[i].length;
      findIndex = i;
    }
  }
  return newString[findIndex];
}

let sentence = "A revolution without dancing is a revolution not worth having.";
let sentence2 =
  "Which would be worse - to live as a monster, orto die as a good man?";
console.log(findLongestWord(sentence));
