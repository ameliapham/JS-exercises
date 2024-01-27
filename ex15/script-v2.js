/**
 * @param {Array} arr  
 * @param {number} num
 * @returns {boolean} 
 */

function getIndexToIns(arr, num){
    return arr.filter(value => value < num).length
}

//const x = getIndexToIns([2, 5, 10], 15);
//const y = getIndexToIns([70, 20, 55, 40, 50], 40);
const z = getIndexToIns([], 1)
console.log(z)