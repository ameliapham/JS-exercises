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

    // Special cas 2 : If num is greater than the last element of array, return the index of the last element + 1 (the length of the array)
    if (num > sortedArr[sortedArr.length - 1]){
        return sortedArr.length
    }

}