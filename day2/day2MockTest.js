function flippingMatrix(matrix) {
    const n = matrix.length; // Get the size of the matrix
    const halfN = Math.floor(n / 2); // Get the half size of the matrix
  
    let maxSum = 0;
  
    // Iterate over the upper-left quadrant of the matrix
    for (let i = 0; i < halfN; i++) {
      for (let j = 0; j < halfN; j++) {
        const topLeft = matrix[i][j];
        const topRight = matrix[i][n - 1 - j];
        const bottomLeft = matrix[n - 1 - i][j];
        const bottomRight = matrix[n - 1 - i][n - 1 - j];
  
        const currentSum = Math.max(topLeft, topRight, bottomLeft, bottomRight);
        maxSum += currentSum;
      }
    }
  
    return maxSum;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  const result = flippingMatrix(matrix);
  console.log(result);
  