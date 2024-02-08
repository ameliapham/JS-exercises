function translatePigLatin(str) {
    // Check if the word contains vowels. If not, add "ay" at the end
    if (!str.match(/[aeiou]/)) {
        return str + "ay"
    }

    return str;
}

const x = translatePigLatin("schwartz") // -> artzschway
console.log(x)
translatePigLatin("rhythm"); // -> rhythm
translatePigLatin("california") // -> aliforniacay
translatePigLatin("glove") // -> oveglay
translatePigLatin("algorithm") // -> algorithmway