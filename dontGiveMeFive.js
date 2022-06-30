/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/
//PREP
//P: a start number and end number (inclusive), always positive? whole numbers?
//R: return count of all numbers EXCEPT 5
/*E:
dontGiveMeFive(1,5) ==> 4
dontGiveMeFive(1,15)==> 13
*/

function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }