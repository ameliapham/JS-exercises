function rotateLeft(d, arr) {
    console.log({d, arr})
    const result = []

    for (let i = 0; i<arr.length; i++){
        let i2 = i

        for (j = 0; j<d; j++){
            i2++

            if (i2 > arr.length - 1){
                i2 = 0
            } 
        }

        result[i] = arr[i2] 
    }
return result
}

const x = rotateLeft(3, [1,2,3,4,5])

console.log(x)