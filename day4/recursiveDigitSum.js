function superDigit(n, k) {
// Base case: If n is a single-digit number, return n
if (n.length === 1) {
    return n;
  }

  // Calculate the sum of digits in n
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  }

  // Multiply the sum by k
  const multipliedSum = sum * k;

  // Recursively call superDigit on the multiplied sum
  return superDigit(String(multipliedSum), 1);

}
