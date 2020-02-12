let fLine = "4500 50"
let sLine = "7 12 12 13 14 28 29 29 30 32 32 34 41 45 46 56 61 61 62 63 65 68 76 77 77 92 93 94 97 103 113 114 114 120 135 145 145 149 156 157 160 169 172 179 184 185 189 194 195 195"

let max = parseInt(fLine.split(" ")[0], 10);
let pizzas = (sLine.split(" ")).map(str => parseInt(str, 10));

let pizzaIndex = [];
let pizzaSlices;

index = pizzas.length - 1;

// loop from the highest number
for(let i = index; i >= 0; i--) {

    if(pizzas[i] <= max) {
        pizzaIndex.push(i);
        pizzaSlices = pizzas[i];
    }

    let slicesLeft = max - pizzaSlices;

    for (let j = i - 1; j >=0; j--) {

    }

}
