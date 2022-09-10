/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/

function mergeArrays(a, b) {
    //find the array with the shortest length
    let min = Math.min(a.length,b.length);
    //create array to push alternating elements to
    let newArr = [];
    //loop through both arrays, pushing one element at a time in alternating order
    for(let i = 0; i < min; i++){
      newArr.push(a[i],b[i])
    }
    //pushes whatever was remaining from the longer array to the newArr
    newArr.push(...a.slice(min),...b.slice(min));
    //returns the final array answer
    return newArr;
  }

  //other solution

  function mergeArrays(a, b) {
    var answer = [];
    
    for (i = 0; i < Math.max(a.length, b.length); i++){
      if (i < a.length) {answer.push(a[i]);}
      if (i < b.length) {answer.push(b[i]);}
    }
    
    return answer; 
    
    
  }