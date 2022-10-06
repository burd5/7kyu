/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

function alphabetWar(fight)
{
    //Object to hold left values
   const leftSide = {
      w: 4,
      p: 3,
      b: 2,
      s: 1
   }
   //Object to hold right values
   const rightSide = {
      m: 4,
      q: 3,
      d: 2,
      z: 1
   }
   
   //Variable to sum total of right values in string
   let rightTotal = 0;
   //Variable to sum total of left values in string
   let leftTotal = 0;
   //Split string into an array to loop through it
   let arr = fight.split('');
  
   //If arr contains value in left/right, add that value to corresponding total variable
   for(let i = 0; i < arr.length; i++){
     if(leftSide[arr[i]]){
       leftTotal += leftSide[arr[i]]
     }
     else if(rightSide[arr[i]]){
       rightTotal += rightSide[arr[i]]
     }
   }
  //See who has the highest point totals and return the winner
  if(rightTotal > leftTotal){
    return 'Right side wins!'
  }
  else if(rightTotal < leftTotal){
    return 'Left side wins!'
  }
  else{
    return 'Let\'s fight again!'
  }
   
   
}