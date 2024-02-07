function destroyer(arr, ...rest) {

    console.log(arr) // [ 1, 2, 3, 1, 2, 3 ]
    console.log(rest) // [ 2, 3 ]

    return arr.filter(elem => !rest.includes(elem)); // [1, 1]
}

const x = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(x) // [1, 1]

const y = destroyer(["tree", "hamburger", 53], "tree", 53)
console.log(y) // [ 'hamburger' ]