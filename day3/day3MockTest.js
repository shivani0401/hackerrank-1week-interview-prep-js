function palindromeIndex(s) {
    let left = 0;
  let right = s.length - 1;

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

  while (left < right) {
    if (s[left] !== s[right]) {
      if (isPalindrome(s, left + 1, right)) {
        return left;
      } else if (isPalindrome(s, left, right - 1)) {
        return right;
      }
      // If neither the left nor right character can be removed to form a palindrome
      return -1;
    }

    left++;
    right--;
  }

  return -1;
}