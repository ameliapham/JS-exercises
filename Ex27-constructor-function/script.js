// Constructor function Animal
function Animal(){}

Animal.prototype = {
    constructor: Animal,
    numLegs: 4,
    eat: function(){
        console.log("miam miam miam")
    },
    describe: function(){
        console.log(`My name is ${this.name}`)
    }
}

// Constructor function Cat
function Cat(name){
    this.name = name
}

Cat.prototype = {
    constructor: Cat,
    meow: function(){
        console.log("meow meow meow")
    }
}

let bombay = new Cat("Bomb")

console.log(bombay.constructor === Cat)
console.log(bombay instanceof Cat)
console.log(Cat.prototype.isPrototypeOf(bombay))

bombay.describe()


// Constructor function Dog
function Dog(name){
    this.name = name
}

Dog.prototype = {
    constructor: Dog,
    bark: function(){
        console.log("woof woof woof")
    }
}

const collie = new Dog("Jun")