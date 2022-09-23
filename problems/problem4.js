/* Random number 
    we must check if our test will generate random number - from min - to max
*/

const randomNum = (min, max) =>{
    let randomize = min + Math.random() * (max + 1 - min);
    return Math.floor(randomize);
}
module.exports = {
    randomNum,
}