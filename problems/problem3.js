/* Reverse String
trying to write test which will check 3 or more reverse strings
*/

function reverseString(str){
    let str2 = str.split('').sort(() => -Infinity).join('');
              
    return str2;
}
module.exports = {
    reverseString,
}