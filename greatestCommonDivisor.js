/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

// original solution

function mygcd(x,y){
    let max = Math.max(x,y);
    while(max > 0){
      if(x % max === 0 && y % max === 0){
        return max;
      }
      else{
        max--
      }
    }
  }

// euclidean algorithm

function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }