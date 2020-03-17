let maxSlices = parseInt(fLine.split(" ")[0], 10);
let pizzas = (sLine.split(" ")).map(str => parseInt(str, 10));

let index = pizzas.length - 1;
let pizzaIndex = [];
let pizzaSlice = 0;

let otherSum = 0;
pizzaSlice = 0;

recursiveCheck(maxSlices - pizzaSlice, index);

function recursiveCheck(max, i) {
    if(i === 1) {
        return;
    }
    if(pizzas[i] > max) {
        recursiveCheck(max, i - 1);
    } else {
        if(max - pizzas[i] <= max - otherSum) {
            pizzaIndex.push(i);
            pizzaSlice += pizzas[i];
            recursiveCheck(max - pizzas[i], i - 1);
        } else {

            otherSum += pizzas[i - 1];
        }
    }
}