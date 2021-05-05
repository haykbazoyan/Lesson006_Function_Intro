function numSubsets(numArr) {
  let result = [];

  for (let i = 0; i < numArr.length - 2; i++) {
    for (let j = i + 1; j < numArr.length - 1; j++) {
      for (let k = j + 1; k < numArr.length; k++) {
        let thirdLoopArr = [];
        thirdLoopArr.push(numArr[i]);
        thirdLoopArr.push(numArr[j]);
        thirdLoopArr.push(numArr[k]);
        result.push(thirdLoopArr);
      }
    }
  }
  return result;
}

let arr = [5, 9, 23, 0, -2, -1, 5];
console.log(numSubsets(arr));
