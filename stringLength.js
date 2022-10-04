function stringLength(str) {
  const strLength = str.length;
  if (strLength > 0 && strLength <= 10) {
    return strLength;
  } else {
    throw new Error(
      'String character should be at least one and not longer than 10'
    );
  }
}

module.exports = stringLength;
