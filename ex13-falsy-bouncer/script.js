function bouncer(arr){
    return arr.filter(elem => Boolean(elem)) // Boolean(elem) chuyển đổi elem thành giá trị Boolean tương ứng. Trong JavaScript, các giá trị như 0, "" (chuỗi rỗng), false, null, undefined, và NaN được coi là falsy (giá trị boolean là false). Tất cả các giá trị khác được coi là truthy (giá trị boolean là true).
}

const x = bouncer([7, "ate", "", false, 9])
console.log(x)