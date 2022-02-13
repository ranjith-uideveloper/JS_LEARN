
let sum = 0;
let add = (num1,num2, ...rest)=>{
    //console.log(num1 + num2);
    rest.forEach(element => {
        sum = sum + element;
        //console.log(element);
    });
    console.log(sum);
}

add(10,10,20,30,40);



let result = 0;
let myVar = [100,200,300];

let calculateSum=(()=>{
    myVar.forEach(element => {
        result = result + element;
        let value = element*2;
        console.log(value);
    });
    //console.log(result);
})

calculateSum();

let disNums = [1,2,3,4,5,6,7,8,9,10];
//console.log(`result is ${disNums.length}`);
let disResult = 1;
for(let num=1; num<=disNums.length; num++){
    if(disNums[num] <= 5){ 
        disResult = num*3;
        console.log(disResult);
    }else if(disNums[num] >=5 && disNums[num] <=8){
        disResult = num*5;
        console.log(disResult);
    }else if(disNums[num] >=8 && disNums[num] <=10){
        disResult = num*10;
        console.log(disResult);
    }
}





