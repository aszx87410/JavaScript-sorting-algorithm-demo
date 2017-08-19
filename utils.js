exports.generateRandomArray = (number) => {
  const MAX = 1e7;
  var result = [];
  while (number--) {
    result[number] = Math.floor(Math.random() * MAX);
  }
  return result;

  /*
  很帥的用法，但數字太大的時候會出錯
  return Array.prototype.constructor.apply(null, Array(number))
    .map(Math.random)
    .map(item => item * MAX)
    .map(Math.floor);
  */
}

exports.defaultSort = (arr) => {
  return arr.slice().sort((a, b) => a - b);
}