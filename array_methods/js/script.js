
let animals = ["Elephant", "Tiger", "Giraffe", "Deer"];
let birds = ["Sparrow", "Dove", "Parrot", "Wood picker"];
let human = ["men", "women", "kids"];
let creatures = animals.concat(birds, human);
console.log(creatures.sort());

// let ulAdd = creatures.entries();

// for(let ind of ulAdd){
//     console.log(ind);
// }

let digi1 = [1]; 
let digi2 = [[6,7,8,9,10]];
digi2[2] = digi2.push(55);
let numbers = digi1.concat(digi2);
console.log(numbers);



