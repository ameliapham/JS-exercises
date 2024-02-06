function Cat(name){
    this.name = name
}

Cat.prototype = {
    constructor: Cat,
    numLegs: 4,
    eat: function(){
        console.log("miam miam miam")
    },
    describe: function(){
        console.log(`My name is ${this.name}`)
    }
}

const birman = new Cat("Shiny")
const bombay = new Cat("Bomb")

console.log(bombay.constructor === Cat)
// console.log(bombay instanceof Cat)
console.log(Cat.prototype.isPrototypeOf(birman))

birman.describe()



function Dog(name){
    this.name = name
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function(){
        console.log("miam miam miam")
    },
    describe: function(){
        console.log(`My name is ${this.name}`)
    }
}

const collie = new Dog("Jun")

