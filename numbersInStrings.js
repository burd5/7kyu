/*
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!
*/

//PREP
//P: a string of numbers and lowercase letters
//R: the largest grouping of numbers (by value)
//E: ("gh12cdy695m1") = 695
//P:

function solve(s){
    //find the numbers in the string
    let numbers = s.match(/[0-9]+/g);
    //find the largest number in the array
    return Math.max(...numbers);
  };

  //More succint way of writing it
  function solve(s){
    return Math.max(...s.match(/\d+/g));
  };