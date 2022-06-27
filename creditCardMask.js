/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

// return masked string
function maskify(cc) {
    let arr = cc.split('');
    let stringLength = cc.length;
    let newArray = []
    //For loop
    for(let i = 0; i < arr.length; i++){
      if(i < stringLength - 4){
        newArray.push('#');
      }
      else if(i >= stringLength - 4){
        newArray.push(arr[i])
      }
    }
    return newArray.join('');
  }

  //Solution using slice method
    function maskify(cc) {
        return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }
  //Solution using replace method
    function maskify(cc) {
        return cc.replace(/.(?=....)/g, '#');
  }