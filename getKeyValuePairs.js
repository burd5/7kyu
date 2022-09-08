/*
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
*/

function keysAndValues(data){
    let keys = [];
    let values = [];
    for(let value of Object.values(data)){
      values.push(value)
    }
    for(let key of Object.keys(data)){
      keys.push(key)
    }
    return [keys,values];
  }

  //Simplest solution

  function keysAndValues(data){
    return [Object.keys(data), Object.values(data)];
}