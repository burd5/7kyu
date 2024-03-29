/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/

//MY SOLUTION

function solve(arr){
    let finalArr = [];
    let sortedArr = arr.sort( (a,b) => a - b);
    for(let i = 0; i <= arr.length + 100; i++){
        finalArr.push(sortedArr.pop())
        finalArr.push(sortedArr.shift())
    }
    return finalArr.filter( number => typeof number == 'number');
};


//OTHER SOLUTIONS

const solve = arr =>
  [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());

  function solve(arr){
    var minMax = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0, j = arr.length-1; i <= j; i++,j--){
      if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
      else minMax.push(arr[i]);
    }
    return minMax;
  }