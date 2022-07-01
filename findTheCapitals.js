/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/
//PREP
//P: a single word as a string
//R: return indexes where capital letters are
/*E:
CoDeWaRs => [0,2,4,6]
pIZZa => [1,2,3]
P*/

var capitals = function (word) {
    let index = []
    let arr = word.split('');
      for(letter of arr){
      if(letter !== letter.toLowerCase()){
        index.push(arr.indexOf(letter));
      }
    }
    return index;
  };