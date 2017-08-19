var sorting = require('./index');
var utils = require('./utils');

var speedTest = (function () {
  var _time = 0;
  var _name =  '';
  return {
    start: (name) => {
      _time = new Date();
      _name = name
    },
    end: (times) => {
      console.log(_name + ': ' + Math.floor((new Date() - _time) / times) + 'ms');
    }
  }
})();

var test = function (func, times) {
  var randomArray = utils.generateRandomArray(3000);
  for (var i = 0; i < times; i++) {
    func(randomArray);
  }
  return;
}

var keys = ['bubbleSort', 'selectionSort', 'insertionSort', 'mergeSort', 'quickSort', 'heapSort'];
for (var i = 0; i < keys.length; i++) {
  speedTest.start(keys[i]);
  test(sorting[keys[i]], 5);
  speedTest.end(5);
}

