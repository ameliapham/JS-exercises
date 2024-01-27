/**
 * @param {string} arr  
 * @param {number} num
 * @returns {boolean} 
 */

function getIndexToIns(arr, num){

    // Sort the array
    let sortedArr = arr.sort((a,b) => {
        return a-b
    })
    console.log(sortedArr)
}