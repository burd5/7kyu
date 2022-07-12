/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }

  //Other solution

  function sumDigits(number) {
    // Turn number into absolute value -> Stringify number -> Split at each character
    var values = String(Math.abs(number)).split("");
    // Instantiate variable to hold math result
    var product = null;
    // For each value, add the value to the product
    for (var i = 0; i < values.length; i++) {
      product = product + Number(values[i]);
    }
    // Return the product variable
    return product;
  }