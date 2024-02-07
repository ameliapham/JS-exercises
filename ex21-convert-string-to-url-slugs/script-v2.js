/**
 * @param {string} title 
 * @param {string} 
 * @returns {boolean} 
 */

function urlSlug(title) {
    
    return title
        .replace(/([A-Z])/g, ' $1') // "ThisIs Spinal_Tap-eh-Oh" -> " This Is  Spinal_ Tap-eh- Oh"
        .trim() // " This Is  Spinal_ Tap-eh- Oh" -> "This Is  Spinal_ Tap-eh- Oh"
        .toLowerCase() // "This Is  Spinal_ Tap-eh- Oh" -> "this is  spinal_ tap-eh- oh"
        .split(/\s+|_\s*|-\s*/) // "this is  spinal_ tap-eh- oh" -> [ 'this', 'is', 'spinal', 'tap', 'eh', 'oh' ]
        .join("-") // -> this-is-spinal-tap-eh-oh

}

const x = urlSlug("ThisIs Spinal_Tap-eh-oh") // -> this-is-spinal-tap
console.log(x)

urlSlug("This Is Spinal Tap") // -> this-is-spinal-tap
urlSlug("The_Andy_Griffith_Show") // -> the-andy-griffith-show
urlSlug("Teletubbies say Eh-oh") // -> teletubbies-say-eh-oh
urlSlug("AllThe-small Things") // -> all-the-small-things


