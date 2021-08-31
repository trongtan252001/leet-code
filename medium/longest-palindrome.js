var longestPalindrome = function (s) {
  var indexResult = 0;
  var maxLen = 0;
  if (s.length < 2) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    let j = i;

    for (let k of [i, i + 1]) {
      while (j >= 0 && k < s.length && s[j] === s[k]) {
        j--;
        k++;
      }
      if (maxLen < k - j - 1) {
        indexResult = j + 1;
        maxLen = k - j - 1;
      }
      console.log(maxLen + "l" + indexResult);
    }
  }
  return s.substring(indexResult, indexResult + maxLen);
};
console.log(longestPalindrome("cbbd"));
