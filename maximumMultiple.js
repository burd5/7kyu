/*
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .
*/

//PREP
//P: divisor and bound, always greater than 0
//R: the greatest possible divisor 
//E: maxMultiple (2,7) ==> return (6)
//P:

function maxMultiple(divisor, bound){

    //push all the divisors to an array
    let divisors = [];
    //starting from 0, loop through and find divisors that are less than the bound and push them to the array
    for(let i = 0; i <= bound; i++){
      if(i % divisor == 0){
        divisors.push(i);
      }
    }
    //return the largest divisor by removing the last element in the array
    return divisors.pop();
  }

  //easier solutions

  function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }

  const maxMultiple = (divisor,bound) => bound - bound % divisor ;
  function maxMultiple(divisor, bound) {
    while (bound % divisor) {
      bound--;
    }
    
    return bound;
  }