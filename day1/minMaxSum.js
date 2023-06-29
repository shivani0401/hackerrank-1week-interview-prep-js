function miniMaxSum(arr) {
    // Sort the array in ascending order
      arr.sort((a, b) => a - b);
    
      // Calculate the sum of all elements in the array
      const sum = arr.reduce((acc, num) => acc + num, 0);
    
      // Calculate the minimum and maximum sums
      const minSum = sum - arr[arr.length - 1];
      const maxSum = sum - arr[0];
    
      // Print the results
      console.log(minSum, maxSum);
    }