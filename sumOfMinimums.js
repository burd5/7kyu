/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.
*/

function sumOfMinimums(arr) {
    //push min of each array to new array
    let minimums = [];
    //loop through each array in the arr
    for(let i = 0; i < arr.length; i++){
        //find min of this subarray and push to minimums
      minimums.push(Math.min(...arr[i]));
    }
    //reduce ('sum') the minimums
    return minimums.reduce( (a,b) => a + b, 0);
  }
