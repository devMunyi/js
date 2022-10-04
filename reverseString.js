function reverseString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return str.split('').reverse().join('');
  }
}

module.exports = reverseString;
