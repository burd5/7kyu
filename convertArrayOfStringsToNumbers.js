/*
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

//PREP
//P: an array of strings
//R: an array of numbers
//E: ie:["1", "2", "3"] to [1, 2, 3]
//P:

function toNumberArray(stringarray){
    let numberArr = []
    for(string of stringarray){
      numberArr.push(Number(string))
    }
    return numberArr;
  }

//Map Solution
const toNumberArray = stringarray => stringarray.map(Number);

//Parse Float Solution
function toNumberArray(stringarray)
{
  return stringarray.map(parseFloat);
}
