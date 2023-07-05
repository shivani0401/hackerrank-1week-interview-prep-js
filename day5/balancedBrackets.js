function isBalanced(s) {
    const stack = [];

  // Define the matching pairs of brackets
  const pairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  // Iterate over each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character is an opening bracket, push it to the stack
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    }
    // If the character is a closing bracket
    else if (char === "}" || char === "]" || char === ")") {
      // Check if the stack is empty or the top of the stack does not match the current closing bracket
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
        return "NO"; // Unbalanced brackets
      }
      stack.pop(); // Matched closing bracket, remove the corresponding opening bracket from the stack
    }
  }

  // Check if all brackets are balanced (stack should be empty)
  if (stack.length === 0) {
    return "YES"; // Balanced brackets
  } else {
    return "NO"; // Unbalanced brackets
  }

}
