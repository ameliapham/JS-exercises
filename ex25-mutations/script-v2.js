// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {

    const arr1 = arr[0].toLowerCase()

    const arr2 = arr[1].toLowerCase()

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            return false
        }
    }
    return true

}

const x = mutation(["hello", "oHell"]);
console.log(x)