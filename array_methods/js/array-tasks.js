let systems = ["Windows", "Linux", "CentOs"];

// for(system in systems){
//     if(systems[system] === "Linux"){
//         console.log(systems[system]);
//     }
// }

// systems.forEach((index)=>{
//     if(index == "CentOs"){
//         console.log(index);
//     }
// })

// systems.filter((ind)=>{
//     if(ind.includes("Windows")){
//         console.log(ind)
//     }
// })

// for(system in systems){
//     console.log(systems[system]);
//     console.log(systems[1]);
//     break;
// }

// for(system in systems){
//     console.log(system += `,`+systems[system]);
// }


let fillShow = systems.fill("test", 2,3);
console.log(fillShow);



let words = ["One", "Two", "Three", "Four", "Five"];
words.forEach((index)=>{
    if(index == "Five"){
        console.log(index)
    }
});

words.shift();
console.log(words);


// let numer = [1,23,4,5,65,7,8,89,2,3,23,33];
// numer.sort((a,c)=>a-c);
// console.log(numer);

let numer = [1,1,23,4,4,5,6,7,8,6,9,9,96,67];
let setArr = new Set();
numer.forEach(element => {
    setArr.add(element);
});
console.log(...setArr);
// let uniq = [...new Set(numer)];
// console.log(uniq);


let elem = ["arr1", "arr2", "arr3", "arr4", "arr3", "arr2", "arr5"];
console.log(elem.fill("Array", 4,5));

let arraySet = new Set();
elem.forEach((val)=>{
    arraySet.add(val);
});
console.log(...arraySet);

