function rotateLeft(d, arr) {
    console.log({d, arr})
    const result = []

    for (let i = 0; i<arr.length; i++){
        let newPosition = i

        for (j = 0; j<d; j++){
            newPosition++

            if (newPosition > arr.length - 1){
                newPosition = 0
            } 
        }

        result[i] = arr[newPosition] // Gán giá trị trực tiếp từ mảng arr lần lượt vào vị trí tương ứng trong mảng result
    }
return result
}

const x = rotateLeft(3, [1,2,3,4,5])

console.log(x)