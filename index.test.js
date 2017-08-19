var sorting = require('./index');
var utils = require('./utils');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

describe('sorting algorithm', () => {
  var sortArray = utils.generateRandomArray(5000);
  var arr = utils.defaultSort(sortArray);
  var excludeSlowAlgorithm = false;

  it('default sort', () => {
    expect(arr).toEqual(utils.defaultSort(sortArray));
  })

  it('bubble sort', () => {
    if (excludeSlowAlgorithm) return;
    expect(arr).toEqual(sorting.bubbleSort(sortArray));
  })

  it('optimzed bubble sort', () => {
    if (excludeSlowAlgorithm) return;
    expect(arr).toEqual(sorting.optimzedBubbleSort(sortArray));
  })

  it('selection sort', () => {
    if (excludeSlowAlgorithm) return;
    expect(arr).toEqual(sorting.selectionSort(sortArray));
  })

  it('insertion sort', () => {
    if (excludeSlowAlgorithm) return;
    expect(arr).toEqual(sorting.insertionSort(sortArray));
  })

  it('simple merge sort', () => {
    expect(arr).toEqual(sorting.simpleMergeSort(sortArray));
  })

  it('merge sort', () => {
    expect(arr).toEqual(sorting.mergeSort(sortArray));
  })

  it('quick sort', () => {
    expect(arr).toEqual(sorting.quickSort(sortArray));
  })

  it('heap sort', () => {
    expect(arr).toEqual(sorting.heapSort(sortArray));
  })
})