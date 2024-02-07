function diffArray(arr1, arr2) {
    let newArr = []

    function diff(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (!second.includes(first[i])) {
                newArr.push(first[i])
            }
        }
    }

    diff(arr1, arr2) // [] -> [6, 7]
    diff(arr2, arr1) // [6, 7] -> [6, 7, 4]

    return newArr
}

const x = diffArray([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5]);
console.log(x)