/*
DESCRIPTION:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s){
    let lowerCase = []
    let upperCase = []
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
      if( i % 2 == 0){
        lowerCase.push(arr[i].toLowerCase())
      }
      else{
        lowerCase.push(arr[i].toUpperCase())
      }
    }
    for(let i = 0; i < arr.length; i++){
      if( i % 2 == 1){
        upperCase.push(arr[i].toLowerCase())
      }
      else{
        upperCase.push(arr[i].toUpperCase())
      }
    }
    return [upperCase.join(''),lowerCase.join('')];
  };

  //

  function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };