// Sorting number by ascending order

function ascendingOrder(arr) {
    // return arr.sort((a,b) => a-b);


    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let k = i+1; k < arr.length; k++){
            if (arr[k] < arr[min]){
                min = k
            }
        }

        if (min !== i){
            let res = arr[i]
            arr[i] = arr[min]
            arr[min] = res
        }


    }
    return arr
}

const x = ascendingOrder([8, 1, 30, 4, 21, 100000]);
console.log(x)