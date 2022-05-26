/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
    let arr = s.split(' ')
    let shortest = arr.reduce((shortestWord,currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, arr[0])
    return shortest.length; 
  }

  //Other solution

  function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }