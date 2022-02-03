// 1 to 10 numbers
let displayNum=()=>{
    for(var i=0; i<=10; i++){
        console.log(i);
    }
}
displayNum();

// Default & Dynamic Parameter 
let displayName=(name="Raja")=>console.log(name);
displayName("test");

// Multi Parameters
let names=(name="Sai", age=25)=>console.log(name, age);
names("Content here", 200);

// Spread Operators
let disElem=(...numbers)=>{
    //console.log(numbers);
    let myNum=[12,34,56,88,...numbers];
    console.log(myNum);
}
disElem([12, 56]);


let games = ["Cricket", "Hockey", "Chess"];
let animals = ["Tiger", "Lion", "Elephant"];
let myObj = games.concat(animals);
//console.log(myObj);


// Spread Operators method alt for concat
let objects =[...animals,...games];
console.log(objects);

let a = "a";

console.log(a === "a");

// Strict Comparison
console.log(Object.is(a,"a"));

let num = "1";

console.log(num == "1");
console.log(num == 1);

console.log(num === "1");
console.log(num === 1);

let myNumbers = [1,2,3,4,5];

for (let index = 0; index < myNumbers.length; index++) {
    if(Object.is(myNumbers[index],5)){
        console.log(myNumbers[index]);
    }
}

