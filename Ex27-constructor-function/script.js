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

// ----------------------------------------------
// Constructor function Cat
function Cat(name){
    this.name = name
}

// Establish inheritance
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

// Add additional properties
Object.assign(Cat.prototype, {
    meow: function(){
        console.log("meow meow meow")
    }
})

let bombay = new Cat("Bomb")

console.log(bombay.constructor === Cat)
console.log(bombay instanceof Cat)
console.log(Cat.prototype.isPrototypeOf(bombay))

bombay.describe()
bombay.eat()

// ----------------------------------------------
// Constructor function Dog
function Dog(name){
    this.name = name
}

// Establish inheritance
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

// Add additional properties
Object.assign(Dog.prototype, {
    bark: function(){
        console.log("woof woof woof")
    }
})

// Override inherited methods
Dog.prototype.eat = function() {
    console.log("nom nom nom")
}

const collie = new Dog("Jun")
collie.bark()
collie.eat()