/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language), and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [newNumerator, newDenominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.
*/

function reduce(fraction){
    let numerator = fraction[0]
    let denominator = fraction[1]
    let gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
    let finalGCD = gcd(numerator,denominator);
    return [numerator/finalGCD, denominator/finalGCD];
}