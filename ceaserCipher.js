///Caesar Cipher function
function caesarCipher(inputString, shiftFactor) {
  // Define a function to shift a single character
  function shiftChar(char, shiftFactor) {
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      const alphabetStart = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const charCode = char.charCodeAt(0);
      const shiftedCharCode = ((charCode - alphabetStart + shiftFactor) % 26) + alphabetStart;
      return String.fromCharCode(shiftedCharCode);
    }
    return char;
  }

  // Use the shiftChar function to transform the entire string
  return inputString.split('').map(char => shiftChar(char, shiftFactor)).join('');
}module.exports = caesarCipher;