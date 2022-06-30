/*
The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/

//PREP

//P: an array that includes at least two items
//R: returns two oldest ages, second oldest/first oldest
/*E: [1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]*/

function twoOldestAges(ages){
    let sortedAges = ages.sort( (a,b) => a - b);
    return sortedAges.slice(-2);
}