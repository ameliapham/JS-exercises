// Take a word and return a capitalized word.
// This mean that the first character is uppercase and the rest lowercase.  
//
// Example:
//  capitalize("coucou") -> "Coucou"
//  capitalize("coucoU") -> "Coucou"
//  capitalize("coucoU huong") -> "Coucou huong"
function capitalize(word) {

    let out = "";

    for (const char of word) {
        if (out === "") {
            out = char.toUpperCase();
        } else {
            out = out + char.toLowerCase();
        }
    }

    return out;
}

function titleCase(sentence) {

    /*
    // "i'm a littLE tea pot".split(" ") -> [ "i'm", "a", "littLE", "tea", "pot"]
    const words = sentence.split(" ");

    // [ "i'm", "a", "littLE", "tea", "pot"] -> [ "I'm", "A", "Little", "Tea", "Pot" ]
    const capitalizedWords = words.map(word => capitalize(word));

    // [ "I'm", "A", "Little", "Tea", "Pot" ] -> "I'm A Little Tea Pot"
    const out = capitalizedWords.join(" ");

    return out;
    */

    return sentence
        .split(" ")
        .map(capitalize)
        .join(" ");




}

const x = titleCase("i'm a littLE tea pot")

//"I'm A Little Tea Pot"
console.log(x)
