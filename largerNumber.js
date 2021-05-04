//[10, 25, 16, -5, 30, 15, 24] , 16       [25, 30, 24]
// [1, 1, 2, -3, 0, 8, 4, 0], 9          “Such values do not exist.”

function largerNumber(array, number) {
  let resultArr = [];

  for (let key of array) {
    if (key > number) {
      resultArr.push(key);
    }
  }
  if (resultArr.length === 0) {
    return `Such values do not exist.`;
  }
  return resultArr;
}

let arr = [10, 25, 16, -5, 30, 15, 24];
let arr2 = [1, 1, 2, -3, 0, 8, 4, 0];
console.log(largerNumber(arr2, 9));
