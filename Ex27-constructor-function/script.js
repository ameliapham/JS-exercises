// Constructor function Animal
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    numLegs: 4,
    eat: function () {
        console.log("miam miam miam")
    },
    describe: function () {
        console.log(`My name is ${this.name}`)
    }
}

// ----------------------------------------------
// Constructor function Cat
function Cat(name) {
    this.name = name

    // Create a private variable
    let owner = "Huong"

    this.getOwner = function () {
        return owner
    }
}

// Establish inheritance
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

// Add additional properties
Object.assign(Cat.prototype, {
    meow: function () {
        console.log("meow meow meow")
    }
})

let bombay = new Cat("Shiny")

console.log(bombay.constructor === Cat)
console.log(bombay instanceof Cat)
console.log(Cat.prototype.isPrototypeOf(bombay))

bombay.describe()
bombay.eat()
console.log(bombay.getOwner())

// ----------------------------------------------
// Constructor function Dog
function Dog(name) {
    this.name = name
}

// Establish inheritance
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

// Add additional properties
Object.assign(Dog.prototype, {
    bark: function () {
        console.log("woof woof woof")
    }
})

// Override inherited methods
Dog.prototype.eat = function () {
    console.log("nom nom nom")
}

const collie = new Dog("Jun")
collie.bark()
collie.eat()

// ----------------------------------------------
// Constructor function Moto
function Moto(name, model) {
    this.name = name,
        this.model = model
}

Moto.prototype = {
    constructor: Moto,
    start: function () {
        console.log("Let's go !")
    }
}

const monkeyBike = new Moto("monkey", "yamaha")

// ----------------------------------------------
// Mixin function
let motionModule = (function () {
    return {
        runMixin: function (obj) {
            obj.prototype.run = function () {
                console.log("Maximum speed !")
            }
        },
        brakeMixin: function (obj) {
            obj.prototype.brake = function () {
                console.log("Brake before falling !")
            }
        }
    }
})()


motionModule.runMixin(Moto)
motionModule.runMixin(Cat)

motionModule.brakeMixin(Moto)
motionModule.brakeMixin(Cat)

monkeyBike.run()
bombay.run()
bombay.brake()