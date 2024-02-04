// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {

    const arr1 = arr[0].split("").map(char => char.toLowerCase())

    const arr2 = arr[1].split("").map(char => char.toLowerCase())

    // let newArr2 = []

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.every(char => arr2[i] !== char)) {
            // newArr2.push(arr2[i]);
            return false
        }
    }
    return true

    /*
    if (newArr2.length === 0) {
      return true
    } else {
      return false
    } */
}

const x = mutation(["hello", "hey"]);
console.log(x)