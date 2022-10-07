/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
    //split string into an array
    let arr = x.split('');
    //create array to push loop values too
    let switcheroo = [];
    //loop through array, switching a/b and keeping c
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 'a'){
        switcheroo.push('b')
      }
      else if(arr[i] == 'b'){
        switcheroo.push('a')
      }
      else{
        switcheroo.push('c')
      }
    }
    //return switched array
  return switcheroo.join('');
}

//Replace solution

const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")
