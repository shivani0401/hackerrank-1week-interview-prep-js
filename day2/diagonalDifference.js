function diagonalDifference(arr) {
    let primarySum =0;
    let secondarySum=0;
    const n =arr.length;
    
    //calculate the sum of primary diagonal
   for (let i = 0; i < n; i++) 
    {
        primarySum += arr[i][i];
    }
    
    //calculate the sum of secondary diagonal
    for (let i = 0; i < n; i++) 
    {
        secondarySum += arr[i][n - 1 - i];
    }
    
    //Calculate the absolute difference between the two sums
  const difference = Math.abs(primarySum - secondarySum);

  return difference;
}