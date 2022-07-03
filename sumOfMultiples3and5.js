/*
DESCRIPTION:
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/
//PREP
//P: a number
//R: sum of the multiples of 3/5 up to that number
//E: findSum(5) = 8(3 + 5)
//P

function findSum(n) {
    var res = 0;
    for(var i = 0; i <= n; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
        res += i;
      }
    }
    return res;
  }