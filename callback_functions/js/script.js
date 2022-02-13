
let callFunction=(num1,num2)=>{
    let numbers = num1 + num2;
    console.log(numbers);
    disRes(numbers);
}

let disRes=(value)=>{
    document.getElementById('demo').innerHTML = value;
}

callFunction(10,20);

let myArr = ["A", "B", "C", "D"];

myArr.filter((element)=>{
    setTimeout(()=>{
        console.log(element);
    },3000+3000+3000)
})







