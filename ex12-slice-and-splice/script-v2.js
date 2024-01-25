function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice() // Make a copie of arr2

    result.splice(n, 0, ...arr1) // Using splice() and ... to insert each elements of arr1 in the result from index n

    return result

}


//const x = frankenSplice([1, 2, 3, 4], [], 0)
const x = frankenSplice([1, 2, 3], [4, 5, 6], 1)
//const x = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)

console.log(x)
