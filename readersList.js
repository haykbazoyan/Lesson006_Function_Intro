let bookList = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

function sortByPercentStatus(arrayObj) {
  let sortArray = [];

  for (let i = 0; i < arrayObj.length; i++) {
    if (arrayObj[i]["readStatus"] === true) {
      sortArray.push(arrayObj[i]);
    }
  }

  sortArray.sort(function (a, b) {
    return b.percent - a.percent;
  });

  return sortArray;
}

console.log(sortByPercentStatus(bookList));
