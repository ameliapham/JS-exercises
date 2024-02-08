function uniteUnique(...arr) {
    
    const newArr = [].concat(...arr)

    return  newArr.filter((elem, i, arr) => arr.indexOf(elem) === i)
}

const x = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
console.log(x)
uniteUnique([1, 2, 3], [5, 2, 1]); // [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // [1, 2, 3, 5, 4, 6, 7, 8].
uniteUnique([1, 3, 2], [5, 4], [5, 6]); // [1, 3, 2, 5, 4, 6].
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
