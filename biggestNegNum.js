function biggestNegativeNum(array) {
  for (let key of array) {
    if (typeof key === "number") {
      return `Invalid Argument`;
    }
  }

  let maxNum = -Infinity;
  let maxNumArr = [];

  for (let i = 0; i < array.length; i++) {
    let negativeNumSum = 0;
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] < 0) {
        negativeNumSum += array[i][j];
        maxNumArr.push(negativeNumSum);
      }
    }
  }
  for (let key of maxNumArr) {
    if (maxNum < key) {
      maxNum = key;
    }
  }
  if (maxNum === -Infinity) {
    return `No negatives`;
  }

  return maxNum * -1;
}

let arr = [
  [2, -9, -3, 0],
  [1, 2],
  [-4, -11, 0],
];
let arr2 = [
  [3, -4],
  [11, 0],
  [5, 6, 7, 8],
];
let arr3 = [1, 2, 3, 4];
console.log(biggestNegativeNum(arr2));
