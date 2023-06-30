function countingSort(arr) {
    const frequencyArray = new Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      frequencyArray[num]++;
    }
  
    return frequencyArray;    
}
  