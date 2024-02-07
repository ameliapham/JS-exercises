function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2)

    // return newArr.filter(elem => !arr1.includes(elem) || !arr2.includes(elem))
    return newArr.filter(elem => arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1)

}

const x = diffArray([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5]);
console.log(x)