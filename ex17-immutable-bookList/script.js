// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName){
    let newArr = [...arr]
    newArr.push(bookName)
    return newArr
}





// Test function 
const x = add(bookList, "A Brief History of Time")
console.log(x)

const y = remove(bookList, "On The Electrodynamics of Moving Bodies")
console.log(y)