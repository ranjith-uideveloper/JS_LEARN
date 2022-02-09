
let disNum=()=>{
    for(var i=0; i<=10; i++){
        var inpVal = document.getElementById("getNm").value;
        if(inpVal > 5){
            console.log(inpVal);
        }
    }
}

let myNum=()=>{
    for(var i=10; i<=15; i++){
        console.log(i);
    }
}
myNum();

// for(var i=0; i<2; i++){
//     if(i<1){
//         let digits=(name="Ranjith")=>(alert(`name:${name}`));
//         digits(); 
//     }
// }

let calen=(day="Tomorrow")=>(console.log(day));
calen("Today");

let locat=(location="Hyd", cntr="India")=>(console.log(location, cntr));
locat("Hyderabad", "Ind");

let spreadOper=(...spr)=>{
    let myNumber=[1,2,3,...spr];
    console.log(myNumber);
}
spreadOper(11,585,66);

let arr1 = ["One", "Two", "Three"];
let arr2 = [...arr1];
console.log(arr2);


let ind=(name="Jack", addr="USA")=>(console.log(name, addr));
ind("Jackson", "Uk");


let arrayTwo = ["Warner", "Smith"];
let arrayOne = ["Dhoni","Kohli"];

let crik=(arrayOne)=>(console.log(arrayOne));
let kolkata = ["Ganguly"];
crik(...kolkata);

let myNumbr=(num1, num2, num3)=>(console.log(num1 + num2 + num3));
let numTest = [1,2,3];
myNumbr(...numTest);


let colors = ["Red", "Yellow", "Blue", "Green"];
let colVal = ["RGB", "HEX"];

// 2 ways to combine array, 1 is CONCAT, 2 is can do with SPREAD OPERATOR (...)
let allCols = [...colors,...colVal];
console.log(allCols);

let allCol = colors.concat(colVal);
console.log(allCol);

// Replace Array object with SPREAD OPERATOR
let fruits = ["Orange", "Banana", "Kiwi", "Apple"];
let fruits2 = [...fruits];
let countries = ["USA", "INDIA", "UK", "AUS"];
//console.log(fruits);
countries[0] = "TestTool";
console.log(...countries,...fruits);



let networks = ["Airtel", "JIO", "VI"];
let allNetworks = [...networks];
console.log(allNetworks);
//let ott = ["prime", "netflix", "aha"];

networks[0] = "BSNL";

console.log(...networks, ...allNetworks);


// Concatenation two arrays 
let lang = ["Html", "Js", "PHP"];
let dsign = ["Css", "Photoshop"];
let designTools = [...lang, ...dsign];
console.log(designTools);

designTools.forEach(index => {
    document.write(`abc ${index}`);
});

let mathNum = [2,65,4,6,1,15];
console.log(Math.min(...mathNum));
console.log(Math.max(...mathNum));

let cloths = ["T-Shirts", "Pants", "Frocks"];
let myFunction=(name="dresses")=>(
    console.log(`${name}`)
);
myFunction(cloths.push("Coat"));
console.log(...cloths);


let test1=(name="John", address="Japan")=>(
    console.log(`${name}, ${address}`)
);
test1("Disney", "India");


let numVal = [55,54,45,15,54,48,5848,45,11,15,5];
console.log(Math.max(...numVal));
//numVal.pop(); // Removes Last Element
//numVal.shift(); // Removes First Element
//numVal.push(12,99); // Adds to Last Element
//numVal.unshift(999); // Adds to First Element


let words = ["Alpha", "Beta", "Gama", "Spec", "Alex", "Rox"];
let wordAll = words.slice(1,2); // first nmber removes an object, second nmber displays second object only
console.log(wordAll);

let doc1 = ["excel", "pdf", "word", "psd", "jpg"];
let docs = doc1.splice(2,3); // first removes an object, second displays from second object
console.log(docs);



let planets=(planet1="Sun", planet2="Moon")=>(console.log(planet1, planet2));
planets("Mercury", "Saturn");



let numDis=(...numBers)=>{
    let onetoFive = [1,3,4,2,5,...numBers]
    console.log(onetoFive);
}
numDis(999,888);


// console.log(comp.indexOf("Infosys"));
// for(var i=0; i<comp.length; i++){
//     if(Object.is(comp.length[i],"Infosys")){
//         console.log(comp[i]);
//     }
// }


let comp = ["tata", "Infosys", "Deloitte", "CGI"];
// comp.filter((res)=>{
//     if(res.indexOf("Infosys")){
//         console.log(res);
//     }
// })

comp.forEach(i => {
    if(i.includes("Infosys")){
        console.log(i);
    }
});


let count = [1,24,57,77,32,64,9,99,22,44,2];
count.sort((x,y)=>x-y);
console.log(count);



let arraysBox = [
    ["Note", "Vscode", "Paint",["TestOne"],["TestTwo"]],["Editor", "Paint", "Sketch"],["Ui", "Ux", "Design"]
];

for(var L1=0; L1<arraysBox.length; L1++){
    for(var L2=0; L2<arraysBox[L1].length; L2++){
        console.log(arraysBox[0][L2][3]);
        // for(var L3=0; L3<arraysBox[L2].length; L3++){
        //     console.log(arraysBox[0][2][0][L2]);
        // }
    }
}


// for(var i=0; i<arraysBox.length; i++){
//     console.log(arraysBox[3]);
// }



let subjects = ["html", "css", "js"];
let pro = ["c", "java", "php"];

let langs=(...pros)=>{
    let results = [subjects,...pros];
    //console.log(results);
};
langs();







let student = {id:001, myName:"Sachin", myLocation:"Mumbai"}

// let id=student.id;
// let myName=student.myName;
// let myLocation=student.myLocation;

// Object Destructuring 
let {id,myName,myLocation} = student;
console.log(`${id},${myName},${myLocation}`);



const map = new Map();
map.set(101,"Raja");
map.set(102,"Test");
map.set(103,"Sehwag");

map.forEach(i => {
    //console.log(i);
});

console.log(map.get(103));


let myObjects = new Map();
myObjects.set(1, "Emp1");
myObjects.set(2, "Emp2");
myObjects.set(3, "Emp3");
myObjects.set(4, "Emp4");

console.log(myObjects.get(4));

// duplicates doesn't print
// const set = new Set();
// set.add(104);
// set.add(104);
// set.add(106);
// set.add(104);
// set.add(104);
// set.add(106);
// set.add(112);
// set.add(104);
// set.add(106);
// set.add(110);
// set.add(110);
// set.add(106);

// set.forEach(element => {
//     console.log(element);
// });


let myArray = [2,3,45,2,555,33,33,66,88,33,23,90];
let set = new Set();
myArray.forEach(element => {
    set.add(element);
});
console.log(set);


let arraySet = new Set();
myArray.forEach(index =>{
    arraySet.add(index);
})
console.log(arraySet);


let myarraySet = new Set();
myArray.forEach(getval=>{
    myarraySet.add(getval);
});
console.log(myarraySet);


//console.log(myArray.length); // array length


let numdigi = new Set();
numdigi.add(45);
numdigi.add(45);
numdigi.add(54);
numdigi.add(54);
numdigi.add(254);
console.log(numdigi);

let getStr = new Map();
getStr.set(1,"John");
getStr.set(2,"Michael");
getStr.set(3,"Smith");
console.log(getStr.get(3));



// Destructuring
let obj1, obj2, obj3;
[obj1, ...obj3] = [100,500,300];
console.log(obj1, obj3);

let game1, game2, game3;
({game1, game2, ...game3} = {game1:"Hockey", game2:"Cricket", game3:"Chess", game4:"Badminton"});
console.log(game3);

let hab1, hab2, hab3, hab4;
({hab1, ...hab3} = {hab1:"Cardio", hab2:"Jog", hab3:"run", hab4:"walk"});
console.log(hab1, hab3);

let aa = [11,22,33,44];
let [bb,cc] = aa;
console.log(bb);

let emp1, emp2, emp3;
({emp1, ...emp2} = {emp1:"Jack", emp2:"Steven", emp3:"Michael"});
console.log(emp2);

let objectData = ['Day1', 'Day2', 'Day3'];
let[red, yellow, green] = objectData;
console.log(green);



let numberData = [2,34,5,5,5,51,1,144,5,6,6,7,8,855,55,89];
console.log(numberData.sort((x,y)=>x-y));

numberData.forEach(()=>{
    console.log(...new Set(numberData));
});


numberData.forEach((num)=>{
    console.log(...new Set(numberData))
});

for(var i=0; i<numberData.length; i++){
    console.log(...new Set(numberData));
}

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

arr.forEach(()=>{
    console.log(...new Set(arr))
});

arr.filter((data)=>{
    if(data.includes("apple")){
        console.log(data)
    }
})



