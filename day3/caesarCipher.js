function caesarCipher(s, k) {
    let encrypted = "";

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      const encryptedCharCode = ((charCode - 65 + k) % 26) + 65;
      encrypted += String.fromCharCode(encryptedCharCode);
    }
    // Check if the character is a lowercase letter
    else if (charCode >= 97 && charCode <= 122) {
      const encryptedCharCode = ((charCode - 97 + k) % 26) + 97;
      encrypted += String.fromCharCode(encryptedCharCode);
    }
    // If the character is not a letter, add it as is
    else {
      encrypted += s[i];
    }
  }

  return encrypted;
}