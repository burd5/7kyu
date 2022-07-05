/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

*/

function noOdds( values ){
    let evenNums = [];
    for(x of values){
      if(x % 2 === 0){
        evenNums.push(x);
      }
    }
    return evenNums;
  }

  //filter solution
  var noOdds = values => values.filter(x => x % 2 === 0);
