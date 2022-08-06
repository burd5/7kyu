/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
*/

//PREP

//P: a number that is at least five digits and as large as 1000 digits, account for numbers less than five digits (return "invalid")
//R: the greatest sequence of five consecutive digits (return as a number?)
//E: 1234567890 - 67890 is the greatest sequence of 5 consecutive digits.
//P:


//My failed attempt
function solution(digits){
    //find the index of the highest single digit (1-9)
    let digitArr = Array.from(digits);
    let highestNumber = [1];
    for(let i = 0; i < digitArr.length; i++){
        if(digitArr[i] > highestNumber){
          highestNumber.push(Number(digitArr[i]));
          highestNumber.shift();
        }
    }
    
//search to see if there are at least four digits following those "highest digits"
    let indexArr = []
    for(let i = 0; i < digitArr.length; i++){
      if(digitArr[i] == highestNumber){
        indexArr.push(i)
      }
    }
  //return indexArr;
    //compare the returned numbers (if there are multiple) to see which one is the highest
    let highestValue = [0];
    for(let i = 0; i < indexArr.length; i++){
      if(digitArr.slice(indexArr[i]), (indexArr[i] + 5) > Number(highestValue)){
        highestValue.push(digitArr.slice(indexArr[i], (indexArr[i] + 5)).join('') * 1);
        highestValue.shift();
      }
    }
  return highestValue;
}

//Solutions

function solution(digits){
    let answer = 0;
    
    for (let i=0; i<digits.length; i++){
      let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
      if(Number(number) > answer){       //convert to number and compare against answer
        answer = Number(number);
      }
    }
    return answer;
  }

  //

  function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}