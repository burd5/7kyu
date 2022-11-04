/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
    let maxLength = 0;
    let maxDigit = 0;
    for(number of array){
      if(String(number).length > maxLength){
        maxLength = String(number).length;
        maxDigit = number;
      }
    }
    return maxDigit;
  
  }

  // reduce solution

  const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
