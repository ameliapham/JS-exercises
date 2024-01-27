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

    // Find the index where num should be inserted
    for(let i=0; i<sortedArr.length; i++){
        if(sortedArr[i]>= num){
            return sortedArr[i]
        }
    }
}

//const x = getIndexToIns([2, 5, 10], 15);
//const y = getIndexToIns([70, 20, 55, 40, 50], 40);
const z = getIndexToIns([], 1)
console.log(z)