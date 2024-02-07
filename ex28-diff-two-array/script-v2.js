function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2) // ([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5]) -> [1, 2, 3, 5, 6, 7, 1, 2, 3, 4, 5]

    // return newArr.filter(elem => !arr1.includes(elem) || !arr2.includes(elem)) // [1, 2, 3, 5, 6, 7, 1, 2, 3, 4, 5] -> [ 6, 7, 4 ]
    return newArr.filter(elem => arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1) // [1, 2, 3, 5, 6, 7, 1, 2, 3, 4, 5] -> [ 6, 7, 4 ]

}

const x = diffArray([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5]);
console.log(x)