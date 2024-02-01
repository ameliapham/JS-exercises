function reverseString(str) {

    /*
        const a = str.split("") // "Hello Shiny" -> [ "H", "e", "l", "l", "o", " ", "S", "h", "i", "n", "y"]
        
        const b = a.reverse() // [ "H", "e", "l", "l", "o", " ", "S", "h", "i", "n", "y"] -> [ "y", "n", "i", "h", "S", " ", "o", "l", "l", "e", "H"]
    
        const c = b.join("") // [ "y", "n", "i", "h", "S", " ", "o", "l", "l", "e", "H"] -> "ynihS olleH"
    
        return c
    */

    return str
        .split("") // "Hello Shiny" -> [ "H", "e", "l", "l", "o", " ", "S", "h", "i", "n", "y"]
        .reverse() // [ "H", "e", "l", "l", "o", " ", "S", "h", "i", "n", "y"] -> [ "y", "n", "i", "h", "S", " ", "o", "l", "l", "e", "H"]
        .join("") // [ "y", "n", "i", "h", "S", " ", "o", "l", "l", "e", "H"] -> "ynihS olleH"
}

const x = reverseString("Hello Shiny");

console.log("==========>", x);
