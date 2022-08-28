/*
Special thanks to SteffenVogel_79 for the idea.

Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.
*/


function swapVowelCase(str) {
    let lowerCaseVowels = ['a', 'e', 'i', 'o', 'u'];
    let upperCaseVowels = ['A', 'E', 'I', 'O', 'U'];
    let newStr = ''
    for(letter of str){
      if(lowerCaseVowels.includes(letter)){
        newStr += letter.toUpperCase();
      }
      else if(upperCaseVowels.includes(letter)){
        newStr += letter.toLowerCase();
      }
      else{
        newStr += letter;
      }
    }
    return newStr;
  }