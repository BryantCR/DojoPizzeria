
function pizzaOven(crust, SauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.SauceType = SauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("deep dish", "tomato", ["mozzarella"], ["ham", "mushrooms"]);
console.log(pizza3);

var pizza4 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "tuna", "pineapple"]);
console.log(pizza4);
