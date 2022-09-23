/* Write a function that takes an array (a) 
and a number (n) as arguments
 It should return the last n elements of a
*/

const myFunc = (a, n) => {
    return a.slice(-n);
  }

  module.exports ={
    myFunc,
  }
