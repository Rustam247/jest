/* work with .toEqual
make few test to understand if our values are equal
*/ 

const filterArray = (arr) => {
    return arr.filter((item, index) => index % 2 ===0);
}

module.exports ={
    filterArray,
}