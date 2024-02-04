// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let newArr = []

    for (let i = 0; i < arr.length; i += size) {
        let sliceArr = []
        for (let j = i; j < i + size; j++) {
            if (j<arr.length){
                sliceArr.push(arr[j])
            }
        }

        newArr.push(sliceArr)
    }

    return newArr
}

const x = chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 2);
console.log(x)
