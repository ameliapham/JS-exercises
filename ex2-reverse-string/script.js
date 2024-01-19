function reverseString(str) {
    let reversed = ''
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
        //console.log(reversed)
    }
    return reversed
}

const x = reverseString("Hello Shiny");

console.log("==========>", x);
