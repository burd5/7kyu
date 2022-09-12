/*
DESCRIPTION:
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

function arraySum(arr) {
    return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
  }

  function arraySum(arr) {
    var output = 0;
    for (var i in arr) {
      var item = arr[i];
      if ( typeof(item) === "number"  )  { output += item;           }
      if ( item.constructor === Array )  { output += arraySum(item); }
    }
    return output;
  }