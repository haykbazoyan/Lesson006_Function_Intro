function separateNumbers(array) {
  let oddArr = [];
  let evenArr = [];

  for (let key of array) {
    if (key % 2 === 0) {
      evenArr.push(key);
    } else oddArr.push(key);
  }
  console.group("Separate Odd & Even Numbers...");
  console.log(oddArr);
  console.log(evenArr);
  console.groupEnd();
}

let mixedArray = [45, 12, 3, 6, 17, 0];
separateNumbers(mixedArray);
