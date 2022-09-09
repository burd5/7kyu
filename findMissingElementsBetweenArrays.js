/*
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.
*/

//PREP

//P: two arrays with similar values exceot for one value
//R: the value that is missing
//E: ^^

//Attempted Answer (didn't work)

function findMissing(arr1, arr2) {
    let filterArr1 = arr1.filter( number => arr2.indexOf(number) === -1);
    let filterArr2 = arr2.filter( number => arr1.indexOf(number) === -1);
    return Number(filterArr1.concat(filterArr2));
  }

//Loop Answer

const findMissing = (arr1, arr2) => {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] != arr2[i]) return arr1[i];
    }
  }

//Reduce Answer

const sum = arr => arr.reduce((a, b) => a + b, 0);

const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);