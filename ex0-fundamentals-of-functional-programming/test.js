

let x = 0;

// Fonction non pure, avec un effet de bort.  
function nonPureWithSideEffect() {

    const xBefore = x; // const xBefore = 2;
    x = x + 1; // x devien 3
    return xBefore; // on return 2

    //return x++;

    /*
    x= x+1;
    return x;
    */

    //return ++x;
}

// Fonction non pure, sans effet de bort.
function nonPureWithoutSideEffect() {

    const newX = x + 1;
    return newX;

    //return x+1;
}

// Function pure, sans effet de bord.
function pureWithoutSideEffect(x) {
    return x++;
}

/*
const resultOfDoSomethingElse = nonPureWithoutSideEffect();


console.log(pureWithoutSideEffect(8));
console.log(pureWithoutSideEffect(8));
console.log(pureWithoutSideEffect(8));
console.log(pureWithoutSideEffect(8));
console.log(pureWithoutSideEffect(8));
*/

//console.log({ resultOfDoSomething, resultOfDoSomethingElse });




// ==========================

let date = new Date("2024-01-31T13:06:03.846Z");

// Not great, this function has a side effect, it updates the
// global value of the date variable.
function updateDate() {
    date = new Date();
}

// Même si elle n'es pas pure, au moins cette fonction n'a pas d'effet de bord
function getCurrentDate() {

    const currentDate = new Date();

    return currentDate;

}

console.log(date);

//updateDate();
date = getCurrentDate();

console.log(date);


function f(a, b, c) {
    return a + b + c;
}





// ==========================


// Effet de bord ok parce que elle modifie un de ses argument et pas une variable globoal.  
function addNewElementToArray(arr, element) {

    arr.push(element);

}

{

    const arr = ["a", "b"]

    addNewElementToArray(arr, "coucou");

    console.log(arr)

}

// Pure without side effect
function getNewArrayWithAddedElement(arr, element) {


    /*
    const newArray = [];

    arr.forEach(element => newArray.push(element));

    newArray.push(element);
    */


    const newArray = [...arr, element];

    return newArray;

}

{
    const arr = ["a", "b"]

    const newArray= getNewArrayWithAddedElement(arr, "coucou");

    // Le arr n'a pas changer
    console.log(arr);

    // Par contre new array c'est l'array avec coucou en plus.
    console.log(newArray)
}


function f(y){
    y = y + 1;
    return y;
}

{

    let x = 0;

    console.log(f(x));

    console.log(x);

}



{

    let obj = { "x": 0 };

    g(obj);
    g(obj);
    g(obj);
    g(obj);

    console.log(obj.x)

    console.log("----")

    console.log(g({ "x": 0 }))
    console.log(g({ "x": 0 }))
    console.log(g({ "x": 0 }))
    console.log(g({ "x": 0 }))



    function g(objp) {
        //obj.x = obj.x + 1;
        obj = { "x": objp.x + 1 }

        return obj;
    }

}




