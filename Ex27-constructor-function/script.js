function Cat(name){
    this.name = name
}

Cat.prototype = {
    numLegs: 4,
    eat: function(){
        console.log("miam miam miam")
    },
    describe: function(){
        console.log(`My name is ${this.name}`)
    }
}

const birman = new Cat("Shiny")

console.log(birman.describe())