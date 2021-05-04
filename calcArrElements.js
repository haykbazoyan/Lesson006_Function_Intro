// Calculate Sum between given array elements
function calcSumArrElem(arr) {
  let result = 0;

  for (let key of arr) {
    result += key;
  }
  return result;
}
// Calculate difference between given array elements
function calcDiffArrElem(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result -= arr[i];
  }
  return result;
}
// Calculate multiplication between given array elements
function calcMulArrElem(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}
// Calculate division between given array elements
function calcDivArrElem(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result /= arr[i];
  }
  return result;
}
// Main function: calculates sum, difference, multiplication and division between given array elements depending on passed operation symbol.
function calcArrElements(array, symbol) {
  for (let key of array) {
    if (typeof key === "number" && !Number.isNaN(key)) {
      continue;
    } else return `Error: One of the element is not a Number.`;
  }

  switch (symbol) {
    case "+":
      return calcSumArrElem(array);
    case "-":
      return calcDiffArrElem(array);
    case "*":
      return calcMulArrElem(array);
    case "/":
      return calcDivArrElem(array);
    default:
      return `Error: Something wrong.`;
  }
}

let arrOfNum = [1, 2, 3, 4];
console.log(calcArrElements(arrOfNum, "-"));
