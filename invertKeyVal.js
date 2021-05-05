// { a: ‘1ʼ, b: ‘2ʼ, c: ‘2ʼ, d: ‘2ʼ }         { 1: ‘aʼ, 2: [‘bʼ, ‘cʼ, ‘dʼ] }
// { a: ‘1ʼ, b: ‘2ʼ }                         { 1: ‘aʼ, 2: ‘bʼ }

function invertKeyValue(obj) {
  let invObject = {};

  let arrKey = Object.values(obj);
  let arrValue = Object.keys(obj);

  let combKey = [];
  let keyName = "";
  for (let i = 0; i < arrKey.length - 1; i++) {
    if (arrKey[i] === arrKey[i + 1]) {
      if (combKey.length === 0) {
        keyName = arrKey[i];
        combKey.push(arrValue[i]);
      }
      combKey.push(arrValue[i + 1]);
    }
  }
  invObject[keyName] = combKey;

  for (let key in obj) {
    if (invObject[obj[key]] === invObject[keyName]) {
      continue;
    } else {
      invObject[obj[key]] = key;
    }
  }
  return invObject;
}

let objectForInvert = { a: "1", b: "2", c: "2", d: "2" };
console.log(invertKeyValue(objectForInvert));
