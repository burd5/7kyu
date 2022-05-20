/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

//My attempted solution
function XO(str) {
    let x = ['x','X']
    let o = ['o','O']
    let allX = str.split('').filter( ex => ex.includes(x) )
    let allO = str.split('').filter( oh => oh.includes(o) )
    if(allX.length === allO.length){
      return true;
    }
    else{
      return false;
    }
}

//Unlocked solutions
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

  const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }