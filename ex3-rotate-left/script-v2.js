function rotateLeft(d, arr) {
    // console.log(d, arr)
    const result = []
    
    for (let i = 0; i < arr.length; i++){
        let newPosition = (i + d) % arr.length

        result[i] = arr[newPosition]        
    }
    return result
}

const x = rotateLeft(3, [1,2,3,4,5])

console.log(x)