//console.log("Testing file");

var employees = [
    {id:001, name:"Sachin", designation:"Ui Developer", location:"hyderabad", salary:10000, salaryHike(){}},
    {id:002, name:"Sehwag", designation:"UX Developer", location:"Mumbai", salary:30000, salaryHike(){}},
    {id:003, name:"Yuvaraj", designation:"Java Developer", location:"Kolkata", salary:50000, salaryHike(){}},
    {id:004, name:"ganguly", designation:"python Developer", location:"Kolkata", salary:90000, salaryHike(){console.log("Got Hike")}},
];



employees.map((index)=>console.log(index.salary/100*10+index.salary));



// employees.filter((emp)=>{
//     if(emp.designation.includes("Java")){
//         console.log(emp);
//     }
// });

employees.filter((emp)=>{
    // if(emp.id%2 == 0){
    //     console.log(emp);
    // }
});

employees.map((emp)=>console.log(emp.designation.toUpperCase()));


// const salaryHike = ()=>{
//     if(emp.salary>=50000){
//         console.log(emp.salary+5000);
//     }
// }


employees.forEach(emp => {

    emp.salaryHike();

    // if(emp.location == "Hyderabad"){
    //     console.log(emp);
    // }

    //console.log(emp.designation.toUpperCase());

    //console.log(emp.designation.slice(3,5));

    console.log(emp.designation.indexOf("Dev"));

    //console.log(emp.designation.endsWith("r"));

    // if(emp.designation.endsWith("per")){
    //     console.log(emp.designation);
    // }

    // if(emp.designation.startsWith("Ui")){
    //     console.log(emp);
    // }

    var upper = emp.location.toLowerCase();
    if(upper.includes("hyderabad")){
        console.log(emp);
    }

    if(emp.salary>=50000){
        console.log(emp.salary+5000);
        console.log(emp);
    }

    
    //salaryHike();

});




