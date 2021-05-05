function shallowCompare(obj1, obj2) {
  let checker = false;

  if (
    Object.keys(obj1).length === 0 &&
    Object.keys(obj1).length === Object.keys(obj2).length
  ) {
    return true;
  }

  for (let key1 in obj1) {
    for (let key2 in obj2) {
      if (key1 === key2 && obj1[key1] === obj2[key2]) {
        checker = true;
      } else {
        checker = false;
      }
    }
  }
  return checker;
}

let a = {};
let b = {};
console.log(shallowCompare(a, b));
