// “listen”, ["enlists", "google", "inlets", "banana"]

function checkArrEllLength(word, arr) {
  let newArr = [];
  for (let key of arr) {
    if (key.length === word.length) {
      newArr.push(key);
    } else continue;
  }
  return newArr;
}

function selCorrectAnagrams(word, array) {
  let newArr = checkArrEllLength(word, array);

  for (let i = 0; i < newArr.length; i++) {
    let curArr = [];
    for (let key of newArr[i]) {
      curArr.push(key);
    }

    for (let j = 0; j < word.length; j++) {
      for (let k = 0; k < word.length; k++) {
        if (curArr[k] === word[j]) {
          curArr.splice(k, 1);
        }
      }
    }

    if (curArr.length === 0) {
      return newArr[i];
    }
  }
}
let word = "listen";
let arr = ["enlists", "google", "inlets", "banana"];

console.log(selCorrectAnagrams(word, arr));
