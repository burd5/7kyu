/*
When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/

function longestWord(stringOfWords){
    //split string into an array
    let arr = stringOfWords.split(' ')
    //let initial max value equal the length of the first string in the array
    let maxLength = arr[0].length;
    //make an array to hold any string with a length equal to the max value
    let maxWords = [];
    //loop through the strings to find their length
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length >= maxLength){
        let maxLength = arr[i].length;
        maxWords.push(arr[i]);
      }
    }
    //return the last string in the array with the highest value
    return maxWords.pop();
  }

  //Other Solution

  let longestWord = s => s.split(' ').reduceRight((a,b)=>(b.length>a.length) ? b : a);

