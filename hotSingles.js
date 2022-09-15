/*
Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]
*/

function hotSingles(arr1, arr2) {
    let arr1Filter = arr1.filter( element => !arr2.includes(element));
    let arr2Filter = arr2.filter( element => !arr1.includes(element));
    return [...new Set(arr1Filter.concat(arr2Filter))];
  }

  //another way to write it

  const hotSingles = (arr1, arr2) => [...new Set([...arr1, ...arr2])].filter(searchItem => !arr1.includes(searchItem) || !arr2.includes(searchItem));
