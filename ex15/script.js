/**
 * @param {string} arr  
 * @param {number} num
 * @returns {boolean} 
 */

function getIndexToIns(arr, num){
    // Special cas 
    if (arr.length === 0){
        return 0
    }
    
    // Sort the array
    let sortedArr = arr.sort((a,b) => {
        return a-b
    })
    console.log(sortedArr)


}