var crustTypes = ["deep dish", "hand tossed", "New York", "chicago"];
var sauceTypes = ["traditional", "marinara", "alfredo", "rosa"];
var cheeseses = ["mozzarella", "feta", "guda", "blue cheese", "cheddar"];
var toppingses = ["pepperoni", "sausage","mushrooms", "olives", "onions"]

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function random(arr){
    var chance = Math.floor(Math.random()*arr.length);
    return arr[chance];
}

console.log("Jonny's pizza: ");
console.log(pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]));

console.log("Billy's pizza: ");
console.log(pizzaOven(crustTypes[1], sauceTypes[1], [cheeseses[0], cheeseses[1]], [toppingses[2],toppingses[3],toppingses[4]]));

console.log("Party Pizza Number One: ");
console.log(pizzaOven(random(crustTypes), random(sauceTypes), random(cheeseses), [random(toppingses), random(toppingses), random(toppingses)]));

console.log("Party Pizza Number Two: ");
console.log(pizzaOven(random(crustTypes), random(sauceTypes), random(cheeseses), [random(toppingses), random(toppingses), random(toppingses)]));