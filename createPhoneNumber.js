/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

//PREP
//P: array of 10 integers, no negatives/letters/etc.?
//R: returns a string in phone format number, how would you like this returned? console.log?
//E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//P: 

function createPhoneNumber(numbers){
    let first = numbers.join("").slice(0,3);
    let second = numbers.join("").slice(3,6);
    let third = numbers.join("").slice(6,10);
    return `(${first}) ${second}-${third}`
  }

  //Solution using for loop and replace

  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }