// * https://leetcode.com/problems/sum-of-square-numbers/
var judgeSquareSum = function (c) {
  if (c < 0) {
    return false;
  }
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    let cur = left * left + right * right;
    if (cur < c) {
      left++;
    } else if (cur > c) {
      right--;
    } else {
      return true;
    }
  }
  return false;
};
console.log(judgeSquareSum(3));
