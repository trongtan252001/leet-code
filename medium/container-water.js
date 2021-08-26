var isPalindrome = function (x) {
  if (x < 0) return false;
  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
  return rev === x;
};
var isPalindrome = function (x) {
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = x * -1;
  }
  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
  return rev >= 0x7fffffff ? rev * -1 : 0;
};
var reverse = function (x) {
  const absReversed = Math.abs(x).toString().split("").reverse().join("");
  if (absReversed > 2 ** 31) return 0;
  return absReversed * Math.sign(x);
};
console.log(reverse(-470));
