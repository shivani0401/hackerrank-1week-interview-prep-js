//find the median

function findMedian(arr) {
    //sort the array
    arr.sort((a, b) => a - b);

  const length = arr.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Array has an even number of elements
    const median = (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    return median;
  } else {
    // Array has an odd number of elements
    const median = arr[middleIndex];
    return median;
  }

}
