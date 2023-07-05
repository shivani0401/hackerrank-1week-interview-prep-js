function pairs(k, arr) {
    const set = new Set(arr);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const target = arr[i] - k;

    if (set.has(target)) {
      count++;
    }
  }

  return count;

}
