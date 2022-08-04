/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    let arr = str.split(' ');
    let finalString = [];
    for(let i = 0; i < arr.length; i++){
      let rev = arr[i].split('').reverse().join('')
      finalString.push(rev);
    }
    return finalString.join(' ');
  }

  //Using Map

  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }