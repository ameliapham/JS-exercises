function frankenSplice(arr1, arr2, n) {
    let result = []

    for (let i = 0; i < n; i++) {
        result.push(arr2[i]) // Slice to take first partie of arr2 before n : [] -> [4]
    }

    for (let j = 0; j < arr1.length; j++) {
        result.push(arr1[j]) // Add to array result all the element of arr1 : [4] -> [4, 1, 2, 3]
    }

    for (let k = n; k < arr2.length; k++) {
        result.push(arr2[k]) // Add the reste of arr2 to array result : [4, 5, 1, 2, 3] -> [4, 1, 2, 3, 5]
    }

    return result;

}


//const x = frankenSplice([1, 2, 3, 4], [], 0)
const x = frankenSplice([1, 2, 3], [4, 5], 1)
//const x = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)

console.log(x)
