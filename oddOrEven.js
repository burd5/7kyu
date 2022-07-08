/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"
*/

function oddOrEven(array) {
    let returnSum = array.reduce( (sum,accum) => sum += accum, 0);
    if(returnSum % 2 === 0){
      return 'even'
    }
    else{
      return 'odd'
    }
 }